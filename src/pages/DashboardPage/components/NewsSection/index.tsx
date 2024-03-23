import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface InsightThumbnailProps {
	title: string;
	thumbnailImage: string;
	urlPath: string;
	imageClassName?: string;
}

const InsightThumbnail: React.FC<InsightThumbnailProps> = ({ title, thumbnailImage, urlPath, imageClassName}) => {
	return (
		<a
			href={urlPath}
			target="_blank"
			rel="noreferrer"
			className="transition-all hover:scale-105"
		>
			<div className="h-40 w-56 rounded-3xl overflow-hidden relative">
				<div className="bg-blue-200 h-full w-full">
					<img className={imageClassName} src={thumbnailImage} alt={title} />
				</div>
				<div className="absolute bottom-0 text-xs text-white bg-gray-800 bg-opacity-50 px-4">
					{title}
				</div>
			</div>
		</a>
	);
};

const NewsComponent: React.FC = () => {
	const [articles, setArticles] = useState<InsightThumbnailProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
  
	useEffect(() => {
	  const fetchArticles = async () => {
		try {
		  const response = await axios.get('https://gnews.io/api/v4/search', {
			params: {
			  token: '412e719efb131fe993a0691df9f8d318',
			  country: 'sg',
			  q: "drugs",
			  max: 3,
			  lang: 'en',
			  media: 'straitstimes.com,channelnewsasia.com',
			  sort: 'publishedAt',
			}
		  });
		  setArticles(response.data.articles);
		  setLoading(false);
		} catch (error) {
		  setError('Failed to fetch news');
		  setLoading(false);
		}
	  };
  
	  fetchArticles();
	}, []);
  
	if (loading) {
	  return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
  
	return (
		<div className="flex gap-3">
			{articles.slice(0, 3).map((article: any, index: number) => (
				<InsightThumbnail
					key={index}	
					title={article.title}
					thumbnailImage={article.image}
					urlPath={article.url}
					imageClassName="h-[105%] w-[105%]"
				/>
			))}
		</div>
	);
};

export default function NewsSection() {
	// Handle navigation
	const navigate = useNavigate();
	const handleNavigateToNewsPage = () => {
		navigate("/news");
	};

	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-between items-end">
				<div className="md:text-2xl text-xl font-bold text-start">
					Insight Hub
				</div>
				<div
					className="flex items-center gap-1 cursor-pointer"
					onClick={handleNavigateToNewsPage}
				>
					<span className="font-medium text-gray-500">More</span>
					<IoIosArrowForward className="text-sm mt-[0.1rem] text-gray-500" />
				</div>
			</div>
			<div className="flex flex-row gap-4 items-center bg-black bg-opacity-25 p-8 rounded-2xl">
				<NewsComponent />
			</div>
			<div className="text-center md:text-base sm:text-sm text-xs">
				Go back to reading{" "}
				<span className="underline text-red-800 font-medium cursor-pointer">
					Vaping is harmful
				</span>
			</div>
		</div>
	)
}