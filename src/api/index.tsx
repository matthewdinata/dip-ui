import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";

export const fetchNews = async (topic: string, current_date: string) => {
	const response = await fetch(`https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_metadata?topic=${topic}&current_date=${current_date}`);
	if (!response.ok) {
		throw new Error('Failed to fetch news');
	}
	return response.json();
};
