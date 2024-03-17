// Components
import GameSection from "./components/GameSection";
import NewsSection from "./components/NewsSection";

export default function DashboardPage() {
	return (
		<div className="min-h-screen">
			<div className="mb-12">
				<NewsSection />
			</div>

			<div>
				<GameSection />
			</div>
		</div>
	);
}
