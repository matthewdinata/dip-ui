// Assets
import appLogo from "@/assets/appLogo@3x.png";

// Constants - utils
import { auth } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
	const [user] = useAuthState(auth);
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
						<div className="bg-red-50 hover:bg-red-100 transition-all text-black text-xs md:text-sm font-medium py-1 px-2 sm:px-5 rounded-xl cursor-pointer">
							LOGOUT
						</div>
					</div>
				) : (
					<div>LOGIN</div>
				)}
			</div>
		</div>
	);
}
