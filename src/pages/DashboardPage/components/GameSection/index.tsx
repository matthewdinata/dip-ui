// Assets
import arThumbnail from "@/assets/arThumbnail@3x.png";
import crosswordThumbnail from "@/assets/crosswordThumbnail@3x.png";
import puzzleThumbnail from "@/assets/puzzleThumbnail@3x.png";
import quizThumbnail from "@/assets/quizThumbnail@3x.png";

// Utils
import { useNavigate } from "react-router-dom";

const GameThumbnail = ({
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
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-col justify-center gap-2 text-center cursor-pointer transition-all hover:scale-105"
			onClick={() => navigate(urlPath)}
		>
			<div className="md:rounded-[4rem] sm:rounded-[2.5rem] rounded-3xl bg-red-400 overflow-hidden aspect-square">
				<img className={imageClassName} src={thumbnailImage} />
			</div>
			<span className="text-xs sm:text-sm md:text-base font-semibold">
				{title}
			</span>
		</div>
	);
};

export default function GameSection() {
	const games = [
		{
			title: "Be Drug ARware",
			thumbnailImage: arThumbnail,
			urlPath: "/arware",
		},
		{
			title: "Find the Symptoms",
			thumbnailImage: crosswordThumbnail,
			urlPath: "/crosswords",
		},
		{
			title: "Quiz Yourself",
			thumbnailImage: quizThumbnail,
			urlPath: "/quiz",
		},
		{
			title: "Puzzles",
			thumbnailImage: puzzleThumbnail,
			urlPath: "/puzzles",
		},
	];

	return (
		<div className="flex flex-col gap-3">
			<div className="md:text-2xl text-xl font-bold text-start">
				Mindful Quest Games 🎮
			</div>
			<div className="flex flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-between items-start">
				{games.map((game, idx) => {
					return (
						<GameThumbnail
							key={idx}
							title={game.title}
							thumbnailImage={game.thumbnailImage}
							imageClassName="h-full w-full"
							urlPath={game.urlPath}
						/>
					);
				})}
			</div>
		</div>
	);
}
