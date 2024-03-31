export const fetchNews = async (topic: string, current_date: string) => {
	const URL = import.meta.env.VITE_BACKEND_URL + "fetch_metadata?" + new URLSearchParams({
		topic: topic,
		current_date: current_date,
	}).toString();
	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Failed to fetch news');
	}
	return response.json();
};
