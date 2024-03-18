import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';

const Button = ({
	title,
	onClick,
}: {
	title: string;
	onClick: () => void;
}) => {
	return (
		<button 
			className="h-14 w-48 rounded-[1.5rem] text-xl text-red-500 bg-white border border-red-500 hover:font-bold hover:border-red-500 hover:border-2 px-4"
			onClick={onClick}
		>
			<div className="button-text">{title}</div>
		</button>
	);
};

interface NewsItemProps {
	image: string;
	title: string;
	description: string;
	url: string;
	publishedAt: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, title, description, url, publishedAt }) => {
	return (
		<div className="flex items-center justify-between p-4 border-solid border-red-200 hover:border-2 rounded-3xl px-4">
			{/* Thumbnail */}
			<div className="flex-shrink-0 mr-4 rounded-md">
				<img
					src={image}
					alt={title}
					className="w-56 h-32 rounded-3xl mr-4"
				/>
			</div>

			{/* Title and Link */}
			<div className="flex-grow border rounded-md p-2">
				<h2 className="text-lg font-semibold">{title}</h2>
				<h3 className="text-lg font-semibold">{description}</h3>
				<h4 className="text-lg font-semibold">{publishedAt}</h4>
				<a href={url} className="text-blue-500 hover:underline">
					Read more
				</a>
			</div>
		</div>
	);
};

const NewsComponentDrug: React.FC = () => {
	const [articles, setArticles] = useState<NewsItemProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null); // State for error handling
  
	useEffect(() => {
	  const fetchArticles = async () => {
		try {
		  const response = await axios.get('https://gnews.io/api/v4/search', {
			params: {
			  token: '8b949f96824fbfe538d0c0180d9eec3d',
			  country: 'sg',
			  q: "drugs",
			  max: 2,
			  lang: 'en',
			  media: 'straitstimes.com,channelnewsasia.com',
			  sort: 'publishedAt',
			}
		  });
		  console.log('Response Data:', response.data);
		  setArticles(response.data.articles);
		  setLoading(false);
		} catch (error) {
		  console.error('Error fetching news:', error);
		  setError('Failed to fetch news'); // Set error state if there's an error
		  setLoading(false);
		}
	  };
  
	  fetchArticles();
	}, []);
  
	if (loading) {
	  return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>; // Render error message if there's an error
	}
  
	return (
		<div>
			{articles.map((article: NewsItemProps, index: number) => (
				<NewsItem
					key={index}
					image={article.image}
					title={article.title}
					description={article.description}
					url={article.url}
					publishedAt={article.publishedAt}
				/>
			))}
		</div>
	);
};

const NewsComponentCyberbullying: React.FC = () => {
	const [articles, setArticles] = useState<NewsItemProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null); // State for error handling
  
	useEffect(() => {
	  const fetchArticles = async () => {
		try {
		  const response = await axios.get('https://gnews.io/api/v4/search', {
			params: {
			  token: '8b949f96824fbfe538d0c0180d9eec3d',
			  country: 'sg',
			  q: "cyberbullying",
			  max: 1,
			  lang: 'en',
			  media: 'straitstimes.com,channelnewsasia.com',
			  sort: 'publishedAt',
			}
		  });
		  console.log('Response Data:', response.data);
		  setArticles(response.data.articles);
		  setLoading(false);
		} catch (error) {
		  console.error('Error fetching news:', error);
		  setError('Failed to fetch news'); // Set error state if there's an error
		  setLoading(false);
		}
	  };
  
	  fetchArticles();
	}, []);
  
	if (loading) {
	  return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>; // Render error message if there's an error
	}
  
	return (
		<div>
			{articles.map((article: NewsItemProps, index: number) => (
				<NewsItem
					key={index}
					image={article.image}
					title={article.title}
					description={article.description}
					url={article.url}
					publishedAt={article.publishedAt}
				/>
			))}
		</div>
	);
};

const NewsComponentVape: React.FC = () => {
	const [articles, setArticles] = useState<NewsItemProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null); // State for error handling
  
	useEffect(() => {
	  const fetchArticles = async () => {
		try {
		  const response = await axios.get('https://gnews.io/api/v4/search', {
			params: {
			  token: '8b949f96824fbfe538d0c0180d9eec3d',
			  country: 'sg',
			  q: "vape",
			  max: 1,
			  lang: 'en',
			  media: 'straitstimes.com,channelnewsasia.com',
			  sort: 'publishedAt',
			}
		  });
		  console.log('Response Data:', response.data);
		  setArticles(response.data.articles);
		  setLoading(false);
		} catch (error) {
		  console.error('Error fetching news:', error);
		  setError('Failed to fetch news'); // Set error state if there's an error
		  setLoading(false);
		}
	  };
  
	  fetchArticles();
	}, []);
  
	if (loading) {
	  return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>; // Render error message if there's an error
	}
  
	return (
		<div>
			{articles.map((article: NewsItemProps, index: number) => (
				<NewsItem
					key={index}
					image={article.image}
					title={article.title}
					description={article.description}
					url={article.url}
					publishedAt={article.publishedAt}
				/>
			))}
		</div>
	);
};

const NewsComponentHeritage: React.FC = () => {
	const [articles, setArticles] = useState<NewsItemProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null); // State for error handling
  
	useEffect(() => {
	  const fetchArticles = async () => {
		try {
		  const response = await axios.get('https://gnews.io/api/v4/search', {
			params: {
			  token: '8b949f96824fbfe538d0c0180d9eec3d',
			  country: 'sg',
			  q: "heritage",
			  max: 1,
			  lang: 'en',
			  media: 'straitstimes.com,channelnewsasia.com',
			  sort: 'publishedAt',
			}
		  });
		  console.log('Response Data:', response.data);
		  setArticles(response.data.articles);
		  setLoading(false);
		} catch (error) {
		  console.error('Error fetching news:', error);
		  setError('Failed to fetch news'); // Set error state if there's an error
		  setLoading(false);
		}
	  };
  
	  fetchArticles();
	}, []);
  
	if (loading) {
	  return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>; // Render error message if there's an error
	}
  
	return (
		<div>
			{articles.map((article: NewsItemProps, index: number) => (
				<NewsItem
					key={index}
					image={article.image}
					title={article.title}
					description={article.description}
					url={article.url}
					publishedAt={article.publishedAt}
				/>
			))}
		</div>
	);
};
  
export default function NewsPage() {
	const [selectedCategory, setSelectedCategory] = useState("drugs");

	const handleTabChange = (category: string) => {
		setSelectedCategory(category);
	};

	return (
		<div className="min-h-screen">
			<div className="mb-12 mt-24 flex flex-col gap-4">
				<IoIosArrowBack className="text-3xl" />
				<div className="text-3xl font-bold text-center">News</div>
				<div className="flex flex-row gap-10 items-center justify-center">
					<Button 
						title="Drugs" 
						onClick={() => handleTabChange("drugs")} 
					/>
					<Button 
						title="Cyber Bully" 
						onClick={() => handleTabChange("cyberbullying")} 
					/>
					<Button 
						title="Vape" 
						onClick={() => handleTabChange("vape")} 
					/>
					<Button 
						title="Heritage" 
						onClick={() => handleTabChange("heritage")} 
					/>
				</div>
				<div className="flex flex-col gap-4 items-center">
					{selectedCategory === "drugs" && <NewsComponentDrug />}
					{selectedCategory === "cyberbullying" && <NewsComponentCyberbullying />}
					{selectedCategory === "vape" && <NewsComponentVape />}
					{selectedCategory === "heritage" && <NewsComponentHeritage />}
				</div>
			</div>
		</div>
	);
}
