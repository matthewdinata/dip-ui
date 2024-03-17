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
			<div className="text-2xl md:text-3xl pt-4 pb-4 md:pb-6 font-semibold">
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
