// Utils
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Assets
import appLogo from "@/assets/appLogo@3x.png";

export default function LandingPage() {
	const { user, login, loading } = useAuth();

	// Handle navigation
	const navigate = useNavigate();

	const handleLogin = async () => {
		if (!user) {
			await login();
		}
	};

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user, navigate]);

	return (
		<>
			{loading && (
				<div className="opacity-50 bg-gray-200 w-full h-full z-10 top-0 left-0 fixed cursor-wait" />
			)}
			<div className="min-h-screen w-full flex flex-col items-center justify-center gap-24">
				<div className="flex flex-col items-center gap-6">
					<img
						src={appLogo}
						referrerPolicy="no-referrer"
						alt="User's Profile Picture"
						className="w-56 sm:w-72"
					/>
					<div className="flex flex-col items-center">
						<div className="text-red-700 text-3xl font-semibold">
							GoodCause
						</div>
						<div className="text-sm">Explore, Learn, Engage</div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<button
						onClick={handleLogin}
						className="bg-red-700 px-12 py-4 text-white text-lg hover:ring-transparent hover:border-transparent focus:ring-transparent focus:border-transparent focus:outline-none hover:bg-red-600 transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
						disabled={loading || !!user}
					>
						Get Started! 🏁
					</button>
				</div>
			</div>
		</>
	);
}
