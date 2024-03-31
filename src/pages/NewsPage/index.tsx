import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";

// Define a QueryClient instance
const queryClient = new QueryClient();

const Button = ({
	title,
	onClick,
}: {
	title: string;
	onClick: () => void;
}) => {
	return (
		<button 
			className="w-36 md:h-14 md:w-48 rounded-[1.5rem] text-sm md:text-2xl bg-[#ca3735] hover:bg-[#ca37356e] text-center text-white hover:text-black hover:border-black px-4"
			onClick={onClick}
		>
			<div className="button-text">{title}</div>
		</button>
	);
};

interface NewsItemProps {
	title: string;
	urlToImage: string;
	url: string;
	publishedAt: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, urlToImage, url, publishedAt}) => {
	const navigate = useNavigate(); // Initialize useNavigate hook

	const openArticlePage = async (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		// Fetch the news content from the provided URL
		const response = await fetch(
		'https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_article?url=' + encodeURIComponent(url)
		);
		const newsContent = await response.text();
		navigate(`/news/article?url=${encodeURIComponent(url)}&content=${encodeURIComponent(newsContent)}&title=${encodeURIComponent(title)}&urlToImage=${encodeURIComponent(urlToImage)}&publishedAt=${encodeURIComponent(publishedAt)}`); // Navigate to the article page with the URL parameter
	};

	return (
		<div className="flex flex-col md:flex-row item-center my-10 md:my-12 xl:px-20 xl:py-8 xl:my-8 border border-solid border-red-300 rounded-3xl">
			{/* Image */}
			<div className="flex">
				<img
					src={urlToImage}
					alt={title}
					className="h-40 w-52 mx-auto mt-4 xl:h-56 xl:w-96 md:h-40 md:w-60 md:my-4 md:mx-4 rounded-3xl xl:ml-12"
				/>
			</div>

			{/* Title and Link */}
			<div className="flex-row px-2 items-center mx-10 my-2 md:py-8 xl:flex-col xl:ml-14 xl:mr-8">
				<h2 className="flex text-base xl:text-3xl font-bold">{title}</h2>
				<h4 className="flex text-xs xl:text-xl font-semibold">{publishedAt.split('T')[0]}</h4>
				<a 
					href = "javascript:void(0);"
					onClick={(event) => openArticlePage(event)}
					className="text-blue-500 text-base font-bold xl:text-xl hover:underline"
				>
					Read more
				</a>
			</div>
		</div>
	);
};

//Line 83-142 are News Fetching
const fetchNews = async (topic: string, current_date: string) => {
	const response = await fetch(`https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_metadata?topic=${topic}&current_date=${current_date}`);
	if (!response.ok) {
		throw new Error('Failed to fetch news');
	}
	return response.json();
};
  
const NewsComponentDrug: React.FC = () => {
	const { data, isLoading, isError } = useQuery('drug', () => fetchNews('drug', '2024-03-29')) || {};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: Failed to fetch news</div>;
	}

	return (
		<div>
		{data && data?.metadata.map((article: NewsItemProps) => (
			<NewsItem
			key={article.url}
			title={article.title}
			urlToImage={article.urlToImage}
			url={article.url}
			publishedAt={article.publishedAt}
			/>
		))}
		</div>
	);
};
  
const NewsComponentVape: React.FC = () => {
	const { data, isLoading, isError } = useQuery('vape', () => fetchNews('vape', '2024-03-29')) || {};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: Failed to fetch news</div>;
	}

	return (
		<div>
		{data && data?.metadata.map((article: NewsItemProps) => (
			<NewsItem
			key={article.url}
			title={article.title}
			urlToImage={article.urlToImage}
			url={article.url}
			publishedAt={article.publishedAt}
			/>
		))}
		</div>
	);
};
  

export default function NewsPage() {
	const [selectedCategory, setSelectedCategory] = useState("drug");

	const handleTabChange = (category: string) => {
		setSelectedCategory(category);
	};

	return (
		<QueryClientProvider client={queryClient}>
		<div className="min-h-screen">
			<div className="pb-12 pt-8 xl:pb-12 xl:pt-24 flex flex-col gap-8">
				<div className="text-3xl xl:text-5xl font-bold text-center xl:text-center">News</div>
				<div className="flex flex-row gap-2 xl:gap-10 justify-center">
					<Button 
						title="Drugs" 
						onClick={() => handleTabChange("drug")} 
					/>
					<Button 
						title="Vape" 
						onClick={() => handleTabChange("vape")} 
					/>
				</div>
				<div className="flex flex-col gap-10 item-center">
					{selectedCategory === "drug" && <NewsComponentDrug />}
					{selectedCategory === "vape" && <NewsComponentVape />}
				</div>
			</div>
		</div>
		</QueryClientProvider>
	);
}
