import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

interface ArticlePageProps {
  title: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ title, urlToImage, url, publishedAt }) => {
  const navigate = useNavigate();

  const openNewsPage = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // Fetch the news content from the provided URL
    const response = await fetch('https://asia-southeast2-ntu-eee-dip-e028.cloudfunctions.net/dip-backend-functions/fetch_article?url=' + encodeURIComponent(url));
    const newsContent = await response.text();

    // Navigate to the news article page with URL and content parameters
    navigate(`/news/article?url=${encodeURIComponent(url)}&content=${encodeURIComponent(newsContent)}`);
  };

  const { title, urlToImage, url, newsContent } = useParams<{ title: string; urlToImage: string; url: string; newsContent: string }>();
  return (
    <div>
      <h2>News Article</h2>
      <p>URL: {encodeURIComponent(url)}</p>
      <p>{title}</p>
      <p>{urlToImage}</p>
      <p>Content: {encodeURIComponent(newsContent)}</p>
    </div>
  );
};

export default ArticlePage;
