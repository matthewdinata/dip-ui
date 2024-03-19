// Assets
import chatbotMascot from "@/assets/chatbotMascot@3x.png";

// Constants - utils
import { useNavigate } from "react-router-dom";

export default function ChatbotSection() {
	const navigate = useNavigate();
	return (
		<div className="w-full flex justify-center">
			<div className="flex flex-row gap-4 sm:gap-6 w-full sm:w-3/4 items-center justify-center">
				<img src={chatbotMascot} className="w-1/2" />
				<div className="flex flex-col gap-4 ">
					<div className="flex flex-col sm:gap-1">
						<span className="text-lg sm:text-2xl font-medium">
							Talk to
						</span>
						<span className="text-3xl sm:text-[3rem] font-bold ml-4 ">
							Bobby
						</span>
						<span className="text-lg sm:text-2xl font-medium ml-8">
							our chatbot!
						</span>
					</div>
					<div
						className="bg-red-700 text-white font-semibold text-lg text-center py-1 px-2 rounded-lg mx-3 sm:mx-4 cursor-pointer hover:bg-red-600 transition-all"
						onClick={() => navigate("/chatbot")}
					>
						Chat now
					</div>
				</div>
			</div>
		</div>
	);
}
