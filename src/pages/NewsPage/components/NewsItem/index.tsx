import React from 'react';
import { useNavigate } from "react-router-dom";

import { NewsItemProps } from 'src/pages/NewsPage/types'

export const NewsItem: React.FC<NewsItemProps> = ({ title, urlToImage, url, publishedAt}) => {
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
