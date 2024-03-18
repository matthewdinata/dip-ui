// Assets
import appLogo from "@/assets/appLogo@3x.png";

// Constants - utils
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
	const { user, login, logout } = useAuth();
	return (
		<div className="w-full h-12 bg-white drop-shadow-md grid grid-cols-3 gap-x-4 items-center px-4">
			<div className="" />
			<img
				src={appLogo}
				className="w-10 h-10 aspect-square text-center justify-self-center col-start-2"
			/>
			<div className="justify-self-end col-start-3">
				{user ? (
					<div className="flex h-8 items-center gap-2">
						<div className="rounded-full w-7 h-7 aspect-square bg-red-500"></div>
						<div
							className="bg-red-100 hover:bg-red-200 transition-all text-black text-xs md:text-sm font-medium py-1 px-2 sm:px-5 rounded-xl cursor-pointer"
							onClick={logout}
						>
							LOGOUT
						</div>
					</div>
				) : (
					<div
						className="bg-orange-100 hover:bg-yellow-300 transition-all text-black text-xs md:text-sm font-medium py-1 px-2 sm:px-5 rounded-xl cursor-pointer"
						onClick={login}
					>
						LOGIN
					</div>
				)}
			</div>
		</div>
	);
}
