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
import { ToastProvider } from "./context/ToastContext";

function App() {
	return (
		<div>
			<ToastProvider>
				<Router>
					<div className="sticky top-0 z-50">
						<Navbar />
					</div>
					<div className="mx-8">
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route
								path="/dashboard"
								element={<DashboardPage />}
							/>
							<Route path="/chatbot" element={<ChatbotPage />} />
							<Route path="/quiz" element={<QuizPage />} />
							<Route path="/news" element={<NewsPage />} />
						</Routes>
					</div>
				</Router>
			</ToastProvider>
		</div>
	);
}

export default App;
