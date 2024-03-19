// Components
import GameSection from "./components/GameSection";
import NewsSection from "./components/NewsSection";

// Constants - utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";
import { useNavigate } from "react-router-dom";

// Assets
import chatbotMascot from "@/assets/chatbotMascot@3x.png";

export default function DashboardPage() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	return (
		<div className="min-h-screen">
			<div className="text-2xl md:text-3xl pt-4 pb-4 md:pb-6 font-semibold">
				Welcome back,{" "}
				<span className="text-red-700">{user?.displayName}</span>!
			</div>
			<div className="mb-12">
				<NewsSection />
			</div>

			<div className="mb-12">
				<GameSection />
			</div>
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
		</div>
	);
}
