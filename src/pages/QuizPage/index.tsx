import Button from "@/components/Button";
import { buttonMapData } from "./data";

export default function QuizPage() {
	const buttonClassName = "hover:!text-black text-white transition-transform ease-in-out scale-100 hover:scale-110 !h-40 !w-40 !bg-[#ca3735] hover:!bg-[#ca37356e] hover:!border-black !px-4";
	return (
		<div className="flex h-full">
			<div className="flex flex-col justify-center items-center gap-16 pt-24 m-auto">
				<div className="text-3xl md:text-5xl font-bold text-center">
					Quiz Yourself!
				</div>
				<div className="flex flex-wrap justify-center gap-10 ">
					{buttonMapData.map((item) => <Button key={item.id} title={item.title} link={item.link} extraButtonClassName={buttonClassName} />)}
				</div>
			</div>
		</div>
	);
}