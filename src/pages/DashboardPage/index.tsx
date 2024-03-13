// Assets
import { IoIosArrowForward } from "react-icons/io";
import ARIcon from "@/assets/ARIcon@3x.png";
import newsThumbnail from "@/assets/newsThumbnail@3x.png";

const InsightThumbnail = ({
	title,
	thumbnailImage,
	imageClassName,
}: {
	title: string;
	thumbnailImage: string;
	imageClassName?: string;
}) => {
	return (
		<div className="h-40 w-56 rounded-3xl overflow-hidden relative">
			<div className="bg-blue-200 h-full w-full">
				<img className={imageClassName} src={thumbnailImage} />
			</div>
			<div className="absolute bottom-0 text-xs text-white bg-gray-800 bg-opacity-50 px-4">
				{title}
			</div>
		</div>
	);
};

const GameThumbnail = ({
	title,
	thumbnailImage,
	imageClassName,
}: {
	title: string;
	thumbnailImage: string;
	imageClassName?: string;
}) => {
	return (
		<div className="flex flex-col justify-center gap-1">
			<div className="rounded-[4.5rem] bg-red-400 h-60 w-60 overflow-hidden">
				<img className={imageClassName} src={thumbnailImage} />
			</div>
			<span className="text-lg font-semibold">{title}</span>
		</div>
	);
};

export default function DashboardPage() {
	return (
		<div className="min-h-screen">
			<div className="mb-12 mt-24 flex flex-col gap-2">
				<div className="text-2xl font-bold text-start">Insight Hub</div>
				<div className="flex flex-row gap-4 items-center">
					<InsightThumbnail
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						thumbnailImage={newsThumbnail}
						imageClassName="h-[105%] w-[105%]"
					/>
					<InsightThumbnail
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						thumbnailImage={newsThumbnail}
						imageClassName="h-[105%] w-[105%]"
					/>
					<InsightThumbnail
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						thumbnailImage={newsThumbnail}
						imageClassName="h-[105%] w-[105%]"
					/>
					<InsightThumbnail
						title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, optio consequuntur."
						thumbnailImage={newsThumbnail}
						imageClassName="h-[105%] w-[105%]"
					/>

					<IoIosArrowForward className="text-3xl" />
				</div>
				<div className="">
					Go back to reading{" "}
					<span className="underline text-red-800 font-medium">
						Vaping is Harmful
					</span>
				</div>
			</div>
			<div className="mb-12 flex flex-col gap-2">
				<div className="text-2xl font-bold text-start">
					Mindful Quest Games
				</div>
				<div className="flex flex-row gap-4">
					<GameThumbnail
						title="Be Drug ARware"
						thumbnailImage={ARIcon}
						imageClassName="h-[105%] w-[105%]"
					/>
					<GameThumbnail
						title="Find the Symptoms"
						thumbnailImage={ARIcon}
						imageClassName="h-[105%] w-[105%]"
					/>
					<GameThumbnail
						title="Quiz Yourself!"
						thumbnailImage={ARIcon}
						imageClassName="h-[105%] w-[105%]"
					/>
					<GameThumbnail
						title="Puzzle"
						thumbnailImage={ARIcon}
						imageClassName="h-[105%] w-[105%]"
					/>
				</div>
				<div className="">
					You recently played{" "}
					<span className="underline text-red-800 font-medium">
						Crossword
					</span>
				</div>
			</div>
		</div>
	);
}
