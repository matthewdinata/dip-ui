// Components
import { Modal } from "antd";

// Assets
import avatar1 from "@/assets/avatar1@3x.png";

// Utils
import useAuth from "@/hooks/useAuth";
import { getUserAvatar } from "@/utils/userUtils";

// Constants - types
import { userInfoType } from "@/types/userTypes";

export default function ProfileModal({
	isModalOpen,
	setIsModalOpen,
}: {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { userInfo } = useAuth();
	return (
		<Modal
			open={isModalOpen}
			onOk={() => setIsModalOpen(false)}
			onCancel={() => setIsModalOpen(false)}
			width={960}
		>
			<div className="flex flex-col items-center gap-8">
				<div className="text-2xl font-medium">Profile</div>
				<div className="flex flex-col items-center gap-1">
					<img
						src={
							userInfo
								? getUserAvatar(userInfo as userInfoType)
								: avatar1
						}
						className="w-16 h-16 rounded-full"
					/>
					<div className="underline">Change Avatar</div>
				</div>
				<div className="flex flex-row gap-4 w-5/6 justify-between">
					<div className="flex flex-1">
						<div className="text-xl">Manage your account</div>
						<div></div>
					</div>
					<div className="flex flex-1">
						<div className="text-xl">Email</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
