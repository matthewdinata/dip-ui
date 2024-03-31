import { useState } from 'react';
import { NewsComponentDrug } from './components/NewsComponentDrug';
import { NewsComponentVape } from './components/NewsComponentVape';

// Define a QueryClient instance


const Button = ({
	title,
	onClick,
}: {
	title: string;
	onClick: () => void;
}) => {
	return (
		<button 
			className="w-36 md:h-14 md:w-48 rounded-[1.5rem] text-sm md:text-2xl bg-[#ca3735] hover:bg-[#ca37356e] text-center text-white hover:text-black hover:border-black px-4"
			onClick={onClick}
		>
			<div className="button-text">{title}</div>
		</button>
	);
};

export default function NewsPage() {
	const [selectedCategory, setSelectedCategory] = useState("drug");

	const handleTabChange = (category: string) => {
		setSelectedCategory(category);
	};

	return (
		<div className="min-h-screen">
			<div className="pb-12 pt-8 xl:pb-12 xl:pt-24 flex flex-col gap-8">
				<div className="text-3xl xl:text-5xl font-bold text-center xl:text-center">News</div>
				<div className="flex flex-row gap-2 xl:gap-10 justify-center">
					<Button 
						title="Drugs" 
						onClick={() => handleTabChange("drug")} 
					/>
					<Button 
						title="Vape" 
						onClick={() => handleTabChange("vape")} 
					/>
				</div>
				<div className="flex flex-col gap-10 item-center">
					{selectedCategory === "drug" && <NewsComponentDrug />}
					{selectedCategory === "vape" && <NewsComponentVape />}
				</div>
			</div>
		</div>
	);
}
