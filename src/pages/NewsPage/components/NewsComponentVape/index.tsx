import { useQuery } from 'react-query';
import { NewsItem } from 'src/pages/NewsPage/components/NewsItem'
import { NewsItemProps } from 'src/pages/NewsPage/types'
import { fetchNews } from '@/api'

export const NewsComponentVape: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { data, isLoading, isError } = useQuery('vape', () => fetchNews('vape', '2024-03-29')) || {};

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
