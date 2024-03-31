import { useNavigate } from "react-router-dom";
import { InsightThumbnailProps } from 'src/pages/DashboardPage/components/NewsSection/types'

/* eslint-disable react/prop-types */
export const InsightThumbnail: React.FC<InsightThumbnailProps> = ({ title, urlToImage, url, imageClassName, publishedAt}) => {
	const navigate = useNavigate(); // Initialize useNavigate hook

	const openArticlePage = async (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		// Fetch the news content from the provided URL
		const response = await fetch('https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_article?url=' + encodeURIComponent(url)
		);
		const newsContent = await response.text();
		navigate(`/news/article?url=${encodeURIComponent(url)}&content=${encodeURIComponent(newsContent)}&title=${encodeURIComponent(title)}&urlToImage=${encodeURIComponent(urlToImage)}&publishedAt=${encodeURIComponent(publishedAt)}`); // Navigate to the article page with the URL parameter
	};

	return (
		<a
            href="#"
			onClick={openArticlePage}
			className="transition-all hover:scale-105"
            style={{ margin: '0 10px', cursor: 'pointer' }}
		>
			<div className="h-40 w-56 rounded-3xl overflow-hidden relative" style={{ margin: '0 10px' }}>
				<div className="bg-blue-200 h-full w-full">
					<img className={imageClassName} src={urlToImage} alt={title} />
				</div>
				<div className="absolute bottom-0 text-xs text-white bg-gray-800 bg-opacity-50 px-4" >
					{title}
				</div>
			</div>
		</a>
	);
};
