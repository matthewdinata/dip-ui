// Components
import GameSection from "./components/GameSection";
import NewsSection from "./components/NewsSection";

// Constants - utils
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";

export default function DashboardPage() {
	const [user] = useAuthState(auth);
	return (
		<div className="min-h-screen">
			<div className="text-2xl md:text-3xl py-6 md:py-8 font-semibold">
				Welcome back,{" "}
				<span className="text-red-700">{user?.displayName}</span>!
			</div>
			<div className="mb-12">
				<NewsSection />
			</div>

			<div>
				<GameSection />
			</div>
		</div>
	);
}
