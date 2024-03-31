import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NewsComponent } from './components/NewsComponent';

export default function NewsSection() {
	// Handle navigation
	const navigate = useNavigate();
	const handleNavigateToNewsPage = () => {
		navigate("/news");
	};

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
				<div className="flex flex-row bg-black bg-opacity-25 p-8 rounded-2xl">
					<div className="flex flex-row">
						<NewsComponent />
					</div>
				</div>
			</div>
	)
}

