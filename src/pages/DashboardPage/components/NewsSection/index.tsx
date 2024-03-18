// Components
import { IoIosArrowForward } from "react-icons/io";

// Constants - utils
import { useNavigate } from "react-router-dom";

// Assets
import newsThumbnail from "@/assets/newsThumbnail@3x.png";

const InsightThumbnail = ({
	title,
	thumbnailImage,
	imageClassName,
	urlPath,
}: {
	title: string;
	thumbnailImage: string;
	imageClassName?: string;
	urlPath: string;
}) => {
	return (
		// TODO: fix href
		<a
			href={`https://example.com` + urlPath}
			target="_blank"
			rel="noreferrer"
			className="transition-all hover:scale-105"
		>
			<div className="h-40 w-56 rounded-3xl overflow-hidden relative">
				<div className="bg-blue-200 h-full w-full">
					<img className={imageClassName} src={thumbnailImage} />
				</div>
				<div className="absolute bottom-0 text-xs text-white bg-gray-800 bg-opacity-50 px-4">
					{title}
				</div>
			</div>
		</a>
	);
};

export default function NewsSection() {
	// Handle navigation
	const navigate = useNavigate();
	const handleNavigateToNewsPage = () => {
		navigate("/news");
	};

	const news = [
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur.",
			thumbnailImage: newsThumbnail,
			urlPath: "/news",
		},
	];

	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-between items-end">
				<div className="md:text-2xl text-xl font-bold text-start">
					Insight Hub
				</div>
				<div
					className="flex items-center gap-1 cursor-pointer"
					onClick={handleNavigateToNewsPage}
				>
					<span className="font-medium text-gray-500">More</span>
					<IoIosArrowForward className="text-sm mt-[0.1rem] text-gray-500" />
				</div>
			</div>
			<div className="flex flex-row gap-4 items-center bg-black bg-opacity-25 p-8 rounded-2xl">
				{news.map((item, idx) => (
					<InsightThumbnail
						key={idx}
						title={item.title}
						thumbnailImage={item.thumbnailImage}
						imageClassName="h-[105%] w-[105%]"
						urlPath={item.urlPath}
					/>
				))}

				<IoIosArrowForward className="text-3xl" />
			</div>
			<div className="text-center md:text-base sm:text-sm text-xs">
				Go back to reading{" "}
				<span className="underline text-red-800 font-medium">
					Vaping is Harmful
				</span>
			</div>
		</div>
	);
}
