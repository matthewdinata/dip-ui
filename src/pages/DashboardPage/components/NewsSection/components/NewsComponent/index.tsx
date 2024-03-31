import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { InsightThumbnailProps } from 'src/pages/DashboardPage/components/NewsSection/types'
import { InsightThumbnail } from '../InsightThumbnail';
import { fetchNews } from '@/api'

export const NewsComponent: React.FC = () => {
	const [thumbnailsToShow, setThumbnailsToShow] = useState(1);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { data, isLoading, isError } = useQuery('drug', () => fetchNews('drug', '2024-03-29')) || {};

	useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // Small screens
                setThumbnailsToShow(1);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) { // Medium screens
                setThumbnailsToShow(2);
            } else { // Large screens (xl)
                setThumbnailsToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set initial state based on screen size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: Failed to fetch news</div>;
	}

	return (
		<div className="flex flex-row">
		{/* eslint-disable-next-line */}
		{data && data?.metadata.slice(0,thumbnailsToShow).map((article: InsightThumbnailProps) => (
			<InsightThumbnail
			key={article.url}
			title={article.title}
			urlToImage={article.urlToImage}
			url={article.url}
			publishedAt={article.publishedAt}
			imageClassName="h-[105%] w-[105%]"
			/>
		))}
		</div>
	);
};
