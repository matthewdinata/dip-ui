//Assets
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import newsThumbnail from "@/assets/newsThumbnail@3x.png";

const Button = ({
	title,
	thumbnailImage,
	imageClassName,
}: {
	title: string;
	thumbnailImage?: string;
	imageClassName?: string;
}) => {
	return (
		<button className="h-14 w-48 rounded-[1.5rem] text-xl text-red-500 bg-white border border-red-500 hover:font-bold hover:border-red-500 hover:border-2 px-4">
			<div className="button-text">{title}</div>
			{thumbnailImage && (
				<div className="image-container">
					<img
						className={imageClassName}
						src={thumbnailImage}
						alt={title} // Provide alt text for accessibility
					/>
				</div>
			)}
		</button>
	);
};

interface NewsItemProps {
	thumbnail: string;
	title: string;
	newsLink: string;
}
const NewsItem: React.FC<NewsItemProps> = ({ thumbnail, title, newsLink }) => {
	return (
		<div className="flex items-center justify-between p-4 border-solid border-red-200 hover:border-2 rounded-3xl px-4">
			{/* Thumbnail */}
			<div className="flex-shrink-0 mr-4 rounded-md">
				<img
					src={thumbnail}
					alt={title}
					className="w-56 h-32 rounded-3xl mr-4"
				/>
			</div>

			{/* Title and Link */}
			<div className="flex-grow border rounded-md p-2">
				<h2 className="text-lg font-semibold">{title}</h2>
				<a href={newsLink} className="text-blue-500 hover:underline">
					Read more
				</a>
			</div>
		</div>
	);
};

export default function NewsPage() {
	return (
		<div className="min-h-screen">
			<div className="mb-12 mt-24 flex flex-col gap-4">
				<IoIosArrowBack className="text-3xl" />
				<header className="text-3xl font-bold text-center">News</header>
				<div className="flex flex-row gap-10 items-center justify-center">
					<Button title="Drugs" imageClassName="h-[105%] w-[105%]" />
					<Button
						title="Cyber Bully"
						imageClassName="h-[105%] w-[105%]"
					/>
					<Button title="Vape" imageClassName="h-[105%] w-[105%]" />
					<Button
						title="Heritage"
						imageClassName="h-[105%] w-[105%]"
					/>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<NewsItem
						thumbnail={newsThumbnail}
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						newsLink="https://example.com/news"
					/>
					<NewsItem
						thumbnail={newsThumbnail}
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						newsLink="https://example.com/news"
					/>
					<NewsItem
						thumbnail={newsThumbnail}
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						newsLink="https://example.com/news"
					/>
					<NewsItem
						thumbnail={newsThumbnail}
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						newsLink="https://example.com/news"
					/>
				</div>
			</div>
		</div>
	);
}
