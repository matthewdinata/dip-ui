import Button from "@/components/Button";
import { buttonMapData } from "./data";

export default function QuizPage() {
	const buttonClassName = "hover:!text-black !h-40 !w-40 !bg-[#ca3735] hover:!bg-[#ca37356e] !text-center !min-w-[175px] hover:!border-black !px-4";
	const titleClassName = "!text-white";
	return (
		<div className="flex h-full">
			<div className="flex flex-col justify-center items-center gap-16 pt-24 m-auto">
				<div className="text-3xl md:text-5xl font-bold text-center">
					Quiz Yourself!
				</div>
				<div className="flex flex-wrap justify-center gap-10 ">
					{buttonMapData.map((item) => <Button key={item.id} title={item.title} link={item.link} extraButtonClassName={buttonClassName} titleClassName={titleClassName} />)}
				</div>
			</div>
		</div>
	);
}