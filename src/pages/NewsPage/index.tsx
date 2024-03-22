import React, { useState, useEffect } from 'react';
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
			className="h-14 w-48 rounded-[1.5rem] text-sm md:text-2xl text-red-500 bg-white border border-red-500 hover:font-bold hover:border-red-500 hover:border-2 px-4"
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
		<div className="flex flex-col md:flex-row item-center md:pl-20 md:pr-20 md:pt-8 md:mt-3 md:mb-3 md:border md:border-solid border-red-300 rounded-3xl">
			{/* Image */}
			<div className="h-24 w-36 px-8 md:h-72 md:w-60 md:py-4 rounded-md">
				<img
					src={image}
					alt={title}
					className="h-36 w-60 md:h-56 md:w-96 rounded-3xl md:mr-8"
				/>
			</div>

			{/* Title and Link */}
			<div className="flex-row px-4 mt-16 mb-10 items-center md:flex-col md:ml-60 md:px-8">
				<h2 className="text-base md:text-2xl font-bold">{title}</h2>
				<h3 className="text-xs md:text-lg font-semibold">{description}</h3>
				<h4 className="text-xs md:text-sm font-semibold">{publishedAt}</h4>
				<a href={url} className="text-blue-500 text-base font-bold hover:underline">
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
			  token: '412e719efb131fe993a0691df9f8d318',
			  country: 'sg',
			  q: "drugs",
			  max: 2, //number of articles displayed
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
			<div className="pb-12 pt-8 md:pb-12 md:pt-24 flex flex-col gap-8">
				<div className="text-3xl md:text-3xl font-bold text-center md:text-center">News</div>
				<div className="flex flex-row gap-2 md:gap-10 justify-center">
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
				<div className="flex flex-col gap-10 item-center">
					{selectedCategory === "drugs" && <NewsComponentDrug />}
					{selectedCategory === "cyberbullying" && <NewsComponentCyberbullying />}
					{selectedCategory === "vape" && <NewsComponentVape />}
					{selectedCategory === "heritage" && <NewsComponentHeritage />}
				</div>
			</div>
		</div>
	);
}
