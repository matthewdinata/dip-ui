// Components
import { ConfigProvider, Modal } from "antd";

// Assets
import avatar1 from "@/assets/avatar1@3x.png";

// Utils
import useAuth from "@/hooks/useAuth";
import { getUserAvatar } from "@/utils/userUtils";
import { useEffect, useState } from "react";

// Constants - types
import { UserInfoType } from "@/types/userTypes";
import AvatarModal from "./AvatarModal";

export default function ProfileModal({
	isModalOpen,
	setIsModalOpen,
}: {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { userInfo, logout, updateUserData } = useAuth();

	const [school, setSchool] = useState<string>("");
	const [grade, setGrade] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isAvatarModalOpen, setIsAvatarModalOpen] = useState<boolean>(false);

	useEffect(() => {
		if (userInfo) {
			setSchool(userInfo.school as string);
			setGrade(userInfo.grade as string);
		}
	}, [userInfo]);

	const handleSave = async () => {
		setIsLoading(true);
		await updateUserData({
			school,
			grade,
		});
		setIsLoading(false);
		setIsModalOpen(false);
	};

	const handleLogout = async () => {
		await logout();
		setIsModalOpen(false);
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Modal: {
						contentBg: "#fcf1e6",
					},
				},
			}}
		>
			<Modal
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				width={960}
				footer={null}
			>
				<div className="flex flex-col items-center gap-8 my-2">
					<div className="text-2xl font-semibold">Profile</div>
					<div className="flex flex-col items-center gap-1">
						<AvatarModal
							isModalOpen={isAvatarModalOpen}
							setIsModalOpen={setIsAvatarModalOpen}
						/>
						<img
							src={
								userInfo
									? getUserAvatar(userInfo as UserInfoType)
									: avatar1
							}
							className="w-16 h-16 rounded-full"
						/>
						<div
							className="underline cursor-pointer"
							onClick={() => setIsAvatarModalOpen(true)}
						>
							Change Avatar
						</div>
					</div>
					<div className="flex flex-row gap-12 w-5/6 justify-between">
						<div className="flex flex-col flex-1 gap-2">
							<div className="text-lg font-medium">
								Manage your account
							</div>
							<div className="flex flex-col gap-4">
								<input
									type="text"
									id="school"
									className="block bg-transparent w-full border border-solid border-gray-400 rounded-lg focus:border-red-800  focus:ring-red-800 transition-all sm:text-base px-4 py-2"
									placeholder="School"
									required
									value={school}
									onChange={(e) => setSchool(e.target.value)}
								/>
								<input
									type="text"
									id="grade"
									className="block bg-transparent w-full border border-solid  border-gray-400 rounded-lg focus:border-red-800 focus:ring-red-800 transition-all sm:text-base px-4 py-2"
									placeholder="Grade"
									required
									value={grade}
									onChange={(e) => setGrade(e.target.value)}
								/>
							</div>
							<button
								className="bg-red-700 text-white font-semibold text-lg text-center py-1 px-6 rounded-lg mt-2 cursor-pointer hover:bg-red-600 transition-all place-self-end hover:ring-transparent hover:border-transparent focus:ring-transparent focus:border-transparent focus:outline-none"
								onClick={handleSave}
								disabled={isLoading}
							>
								Save
							</button>
						</div>
						<div className="flex flex-1 flex-col gap-2">
							<div className="text-lg font-medium">Email</div>
							<input
								type="text"
								id="email"
								className="block bg-transparent w-full border border-solid border-gray-400 rounded-lg focus:border-red-800 focus:ring-red-800 transition-all sm:text-base px-4 py-2 cursor-not-allowed disabled:text-gray-500"
								placeholder="Email"
								required
								disabled
								value={(userInfo?.email as string) ?? ""}
							/>
						</div>
					</div>
					<div
						className="bg-red-700 text-white font-semibold text-lg text-center py-1 px-6 rounded-lg mx-3 mt-16 sm:mx-4 mb-2 cursor-pointer hover:bg-red-600 transition-all"
						onClick={handleLogout}
					>
						Logout
					</div>
				</div>
			</Modal>
		</ConfigProvider>
	);
}
