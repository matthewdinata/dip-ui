import "./App.css";

// Utils
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { ConfigProvider } from "antd";
import useAuth from "./hooks/useAuth";

// Components
import Navbar from "./components/Navbar";

// Pages
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import { ChatbotPage } from "./pages/ChatbotPage";
import QuizPage from "./pages/QuizPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import { CrosswordsPage } from "./pages/CrosswordPage";
import { PuzzlesPage } from "./pages/PuzzlePage";
import ARwarePage from "./pages/ARwarePage";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { user } = useAuth();
	if (!user) {
		return <Navigate to="/" replace />;
	}

	return children;
};

function App() {
	return (
		<div>
			<ConfigProvider
				theme={{
					token: {
						fontFamily:
							"Axiforma, Inter, Avenir, Helvetica, Arial, sans-serif",
					},
				}}
			>
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
									element={
										<ProtectedRoute>
											<DashboardPage />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/chatbot"
									element={
										<ProtectedRoute>
											<ChatbotPage />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/quiz"
									element={
										<ProtectedRoute>
											<QuizPage />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/news"
									element={
										<ProtectedRoute>
											<NewsPage />
										</ProtectedRoute>
									}
								/>
								<Route 
									path="/news/article" 
									element={
										<ProtectedRoute>
											<ArticlePage />
										</ProtectedRoute>  
									} 
								/>
								<Route
									path="/puzzles"
									element={
										<ProtectedRoute>
											<PuzzlesPage />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/crosswords"
									element={
										<ProtectedRoute>
											<CrosswordsPage />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/arware"
									element={
										<ProtectedRoute>
											<ARwarePage />
										</ProtectedRoute>
									}
								/>
								<Route
									path="*"
									element={<Navigate to="/" replace />}
								/>
							</Routes>
						</div>
					</Router>
				</ToastProvider>
			</ConfigProvider>
		</div>
	);
}

export default App;
