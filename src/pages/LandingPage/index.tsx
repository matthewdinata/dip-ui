// Utils
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Assets
import appLogo from "@/assets/appLogo@3x.png";

export default function LandingPage() {
	const { user, login } = useAuth();
	// Handle navigation
	const navigate = useNavigate();

	const handleLogin = async () => {
		if (!user) {
			await login();
		}
		navigate("/dashboard");
	};

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	});

	return (
		<>
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
						className="bg-red-700 px-12 py-4 text-white text-lg hover:ring-transparent hover:border-transparent focus:ring-transparent focus:border-transparent focus:outline-none hover:bg-red-600 transition-all"
					>
						Get Started! 🏁
					</button>
				</div>
			</div>
		</>
	);
}
