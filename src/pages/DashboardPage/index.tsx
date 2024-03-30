// Components
import GameSection from "./components/GameSection";
import NewsSection from "./components/NewsSection";
import ChatbotSection from "./components/ChatbotSection";

// Utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";

export default function DashboardPage() {
	const [user] = useAuthState(auth);

	return (
		<div className="min-h-screen">
			<div className="text-2xl md:text-3xl pt-4 pb-4 md:pb-6 font-semibold">
				{user ? (
					<div>
						Welcome back,{" "}
						<span className="text-red-700">
							{user?.displayName}
						</span>
						!
					</div>
				) : (
					<>Welcome!</>
				)}
			</div>
			<div className="mb-12">
				<NewsSection />
			</div>

			<div className="mb-12">
				<GameSection />
			</div>
			<div>
				<ChatbotSection />
			</div>
		</div>
	);
}
