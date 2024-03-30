import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
			className="h-14 w-48 rounded-[1.5rem] text-sm md:text-2xl bg-[#ca3735] hover:bg-[#ca37356e] text-center text-white hover:text-black min-w-[175px] hover:border-black px-4"
			onClick={onClick}
		>
			<div className="button-text">{title}</div>
		</button>
	);
};

const ArticlePage = () => {
	// Retrieve the URL and news content from the URL parameters
	const { url, newsContent } = useParams<{ url: string; newsContent: string }>();
  
	return (
	  <div>
		<h2>News Article</h2>
		<p>URL: {decodeURIComponent(url)}</p>
		<p>Content: {decodeURIComponent(newsContent)}</p>
	  </div>
	);
};

interface NewsItemProps {
	title: string;
	urlToImage: string;
	url: string;
	publishedAt: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, urlToImage, url, publishedAt}) => {
	const openNewsPage = async (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		// Fetch the news content from the provided URL
		const response = await fetch(
			'https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_article?url=' + encodeURIComponent(url)
		);
		const newsContent = await response.text();
	
		Navigate(`/news/article?url=${url}&content=${newsContent}`);
	}
	return (
		<div className="flex flex-col px-2 md:flex-row item-center md:pl-20 md:pr-20 md:pt-8 md:mt-3 md:mb-3 md:border md:border-solid border-red-300 rounded-3xl">
			{/* Image */}
			<div className="h-28 w-44 md:h-72 md:w-60 md:py-4 rounded-md">
				<img
					src={urlToImage}
					alt={title}
					className="h-40 w-72 px-2 md:h-56 md:w-96 rounded-3xl md:mr-8"
				/>
			</div>

			{/* Title and Link */}
			<div className="flex-row px-2 mt-16 mb-10 items-center md:flex-col md:ml-60 md:px-8">
				<h2 className="text-base md:text-2xl font-bold">{title}</h2>
				<h4 className="text-xs md:text-sm font-semibold">{publishedAt.split('T')[0]}</h4>
				<a 
                    href ={`/news/article?url=${url}`}
                    onClick={openNewsPage}
                    className="text-blue-500 text-base font-bold hover:underline"
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
	const { data, isLoading, isError } = useQuery('drug', () => fetchNews('drug', '2024-03-29'));

	if (isLoading) {
	  return <div>Loading...</div>;
	}
  
	if (isError) {
	  return <div>Error: Failed to fetch news</div>;
	}
  
	return (
	  <div>
		{data.metadata.map((article: any) => (
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
	const { data, isLoading, isError } = useQuery('vape', () => fetchNews('vape', '2024-03-29'));
  
	if (isLoading) {
	  return <div>Loading...</div>;
	}
  
	if (isError) {
	  return <div>Error: Failed to fetch news</div>;
	}
  
	return (
		<div>
		{data.metadata.map((article: any) => (
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
			<div className="pb-12 pt-8 md:pb-12 md:pt-24 flex flex-col gap-8">
				<div className="text-3xl md:text-5xl font-bold text-center md:text-center">News</div>
				<div className="flex flex-row gap-2 md:gap-10 justify-center">
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
