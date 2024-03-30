// Components
import { IoChevronBackOutline } from "react-icons/io5";
import ProfileModal from "./components/ProfileModal";

// Assets
import appLogo from "@/assets/appLogo@3x.png";
import avatar1 from "@/assets/avatar1@3x.png";

// Constants - types
import { UserInfoType } from "@/types/userTypes";

// Utils
import useAuth from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserAvatar } from "@/utils/userUtils";
import { useState } from "react";

export default function Navbar() {
	const { user, userInfo, login, logout } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleLogout = async () => {
		if (user) {
			await logout();
		}
		navigate("/");
	};

	return (
		<div className="w-full h-12 bg-white drop-shadow-md grid grid-cols-3 gap-x-4 items-center px-4">
			{pathname === "/dashboard" || pathname === "/" ? (
				<></>
			) : (
				<div
					className="flex items-center cursor-pointer hover:text-red-900 hover:text-lg hover:scale-105 transition-all ml-1"
					onClick={() => navigate(-1)}
				>
					<IoChevronBackOutline className="text-xl" />
				</div>
			)}

			<img
				src={appLogo}
				className="w-10 h-10 aspect-square text-center justify-self-center col-start-2"
			/>
			<div className="justify-self-end col-start-3">
				{user ? (
					<div className="flex h-8 items-center gap-2">
						<ProfileModal
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
						/>

						<div
							className="rounded-full w-7 h-7 aspect-square bg-red-500 overflow-hidden hover:scale-105 transition-all cursor-pointer"
							onClick={() => setIsModalOpen(true)}
						>
							<img
								src={
									userInfo
										? getUserAvatar(
												userInfo as UserInfoType
											)
										: avatar1
								}
								className="w-full h-full"
							/>
						</div>
						<div
							className="bg-red-100 hover:bg-red-200 transition-all text-black text-xs md:text-sm font-medium py-1 px-2 sm:px-5 rounded-xl cursor-pointer"
							onClick={handleLogout}
						>
							LOGOUT
						</div>
					</div>
				) : pathname !== "/" ? (
					<div
						className="bg-orange-100 hover:bg-yellow-300 transition-all text-black text-xs md:text-sm font-medium py-1 px-2 sm:px-5 rounded-xl cursor-pointer"
						onClick={login}
					>
						LOGIN
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
