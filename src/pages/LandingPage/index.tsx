// Utils
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
	const { user, login, logout } = useAuth();
	// Handle navigation
	const navigate = useNavigate();
	const handleNavigateToDashboardPage = () => {
		navigate("/dashboard");
	};

	return (
		<>
			<div className="w-screen min-h-screen flex items-center justify-center">
				{user ? (
					<div className="flex flex-col items-center">
						<div className="mb-24 flex flex-col gap-2 items-center justify-center">
							<div className="mx-8 mb-4">
								<img
									src={user?.photoURL || ""}
									referrerPolicy="no-referrer"
									alt="User's Profile Picture"
									className="rounded-xl"
								/>
							</div>
							<div className="text-5xl font-semibold mb-2">
								Hello, {user?.displayName}
							</div>
							<div className="text-xl italic">
								You logged in using{" "}
								<span className="text-emerald-700">
									{user.email}
								</span>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<button
								onClick={handleNavigateToDashboardPage}
								className="bg-lime-500 bg-opacity-40"
							>
								START THE ADVENTURE
							</button>
							<button
								onClick={logout}
								className="bg-red-300 bg-opacity-40"
							>
								LOG OUT
							</button>
						</div>
					</div>
				) : (
					<div className="flex flex-col items-center">
						<div className="mb-8 text-5xl font-semibold">
							Welcome to our Super App!
						</div>

						<button onClick={login}>SIGN IN WITH GOOGLE</button>
					</div>
				)}
			</div>
		</>
	);
}
