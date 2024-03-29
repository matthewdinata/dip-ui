import { auth } from "@/services/firebase";
// https://stackoverflow.com/questions/51859873/using-axios-to-return-stream-from-express-app-the-provided-value-stream-is/77107457#77107457
// Axios streaming does not work,hence fetch will be used

export const postChatBotGenerateStream = async (
	message: string
): Promise<AsyncIterable<string>> => {
	let idToken = await auth.currentUser?.getIdToken();
	// Todo: Change url to deployment url
	const URL = import.meta.env.VITE_BACKEND_URL + "chatbot/sse";
	if (!idToken) {
		idToken = "";
	}
	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify({
			message: message,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${idToken}`,
			"Access-Control-Allow-Origin": "*",
		},
	});
	if (response.status !== 200) {
		const errorMessage = await response.text();
		/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access*/
		// Error is only any type so I have disable eslint for error
		throw new Error(
			JSON.stringify({
				status: response.status.toString(),
				message: JSON.parse(errorMessage).message,
			})
		);
	}
	if (!response.body) throw new Error("Response body does not exist");
	return getIterableStream(response.body);

    /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access*/

};

// The star in async function* is asynchronous generator function. Streaming continous receiving message from server, dats why while true is used here
// in order to use it on a higher level like for await, yield will be used return the decodedchunk while looping
async function* getIterableStream(
	body: ReadableStream<Uint8Array>
): AsyncIterable<string> {
	const reader = body.getReader();
	const decoder = new TextDecoder();
	while (true) {
		const { value, done } = await reader.read();
		if (done) {
			break;
		}
		const decodedChunk = decoder.decode(value, { stream: true });
		yield decodedChunk;
	}
}

