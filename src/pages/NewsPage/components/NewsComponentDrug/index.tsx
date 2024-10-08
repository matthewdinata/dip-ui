import { useQuery } from 'react-query';
import { NewsItemProps } from 'src/pages/NewsPage/types'
import { fetchNews } from '@/api'
import { NewsItem } from '../NewsItem';

export const NewsComponentDrug: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { data, isLoading, isError } = useQuery('drug', () => fetchNews('drug', '2024-04-12')) || {};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: Failed to fetch news</div>;
	}

	return (
		<div>
		{/* eslint-disable-next-line */}
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
