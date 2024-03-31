export const fetchNews = async (topic: string, current_date: string) => {
	const URL =
		import.meta.env.VITE_BACKEND_URL +
		"fetch_metadata?" +
		new URLSearchParams({
			topic: topic,
			current_date: current_date,
		}).toString();
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error("Failed to fetch news");
	}
	return response.json();
};

export const fetchArticle = async (url: string) => {
	// Fetch the news content from the provided URL
	const response = await fetch(
		"https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_article?url=" +
			encodeURIComponent(url)
	);
	if (!response.ok) {
		throw new Error("Failed to fetch article");
	}
	const newsContent = await response.text();
	return newsContent;
	// const newsContent = await response.text();
};
