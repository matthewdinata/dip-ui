export const fetchNews = async (topic: string, current_date: string) => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/fetch_metadata?topic=${topic}&current_date=${current_date}`);
	if (!response.ok) {
		throw new Error('Failed to fetch news');
	}
	return response.json();
};
