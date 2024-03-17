import "./App.css";

// Utils
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import { ChatbotPage } from "./pages/ChatbotPage";
import QuizPage from "./pages/QuizPage";
import NewsPage from "./pages/NewsPage";

function App() {
	return (
		<div>
			<Navbar />
			<div className="mx-8">
				<Router>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path="/chatbot" element={<ChatbotPage />} />
						<Route path="/quiz" element={<QuizPage />} />
						<Route path="/news" element={<NewsPage />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
