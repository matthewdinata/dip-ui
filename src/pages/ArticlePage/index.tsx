import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ParsedContentType {
  news_article: string;
}

const ArticlePage = () => {
  const location: Location = useLocation();
  const queryParams: URLSearchParams = new URLSearchParams(location.search);
  const title: string = queryParams.get("title") || "";
  const urlToImage: string = queryParams.get("urlToImage") || "";
  const publishedAt: string = queryParams.get("publishedAt") || "";

  const newsContent: string | null = queryParams.get("content");
  const parsedContent: ParsedContentType | null = newsContent ? JSON.parse(newsContent) as ParsedContentType : null;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);
  
  return (
    <div className="min-h-screen">
			<div className="flex flex-col pb-12 pt-8 px-4 md:pb-12 md:pt-24 md:px-20 gap-8">
				<div className="text-3xl md:text-5xl font-bold text-center md:text-center">{title}</div>
        <img
					src={urlToImage}
					alt={title}
					className="flex justify-center h-auto w-full"
				/>
        <h3>Published at: {publishedAt.split('T')[0]}</h3>
        <p className="text-base md:text-2xl text-justify">{parsedContent?.news_article}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
