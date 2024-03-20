// Utils
import useAuth from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";

// Components
import { ConfigProvider, Modal } from "antd";

// Assets
import avatar1 from "@/assets/avatar1@3x.png";
import avatar2 from "@/assets/avatar2@3x.png";
import avatar3 from "@/assets/avatar3@3x.png";
import avatar4 from "@/assets/avatar4@3x.png";
import avatar5 from "@/assets/avatar5@3x.png";
import avatar6 from "@/assets/avatar6@3x.png";
import avatar7 from "@/assets/avatar7@3x.png";
import avatar8 from "@/assets/avatar8@3x.png";

export default function AvatarModal({
	isModalOpen,
	setIsModalOpen,
}: {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [selectedId, setSelectedId] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { userInfo, updateUserData } = useAuth();
	const { ToastCreate } = useToast();

	const handleSave = async () => {
		setIsLoading(true);
		await updateUserData({
			avatarId: selectedId,
		});
		setIsLoading(false);
		setIsModalOpen(false);

		if (selectedId !== userInfo?.avatarId) {
			setTimeout(() => {
				window.location.reload();
			}, 500);
		}

		ToastCreate({
			message: "Success!",
			description: "Your account has been edited",
			placement: "topRight",
			toastType: "success",
		});
	};

	useEffect(() => {
		if (userInfo) {
			setSelectedId(userInfo.avatarId as number);
		}
	}, [userInfo]);

	const handleSelectedAvatarChange = (id: number) => {
		setSelectedId(id);
	};

	const avatarOptions = [
		{ id: 1, imageSrc: avatar1 },
		{ id: 2, imageSrc: avatar2 },
		{ id: 3, imageSrc: avatar3 },
		{ id: 4, imageSrc: avatar4 },
		{ id: 5, imageSrc: avatar5 },
		{ id: 6, imageSrc: avatar6 },
		{ id: 7, imageSrc: avatar7 },
		{ id: 8, imageSrc: avatar8 },
	];

	return (
		<ConfigProvider
			theme={{
				components: {
					Modal: {
						contentBg: "#ffffff",
					},
				},
			}}
		>
			<Modal
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				width={480}
				footer={null}
			>
				<div className="flex flex-col gap-4">
					<span className="text-red-700 font-bold text-xl sm:text-2xl">
						Change your avatar!
					</span>
					<div className="mt-2 grid grid-cols-4 gap-2">
						{avatarOptions.map((option) => (
							<label
								key={option.id}
								className={
									"cursor-pointer overflow-hidden aspect-square p-1 hover:scale-95 transition-all"
								}
							>
								<input
									type="radio"
									name="avatar"
									value={option.id}
									checked={selectedId === option.id}
									onChange={() =>
										handleSelectedAvatarChange(option.id)
									}
									className="opacity-0 w-0 h-0 absolute"
								/>

								<img
									src={option.imageSrc}
									alt={`Option ${option.id}`}
									className={
										"w-full h-full rounded-full object-cover" +
										`${
											selectedId === option.id
												? "!border scale-95 transition-all shadow-[0_0_0px_3px] shadow-red-600"
												: "border-transparent"
										}`
									}
								/>
							</label>
						))}
					</div>
					<button
						className="bg-red-700 text-white font-semibold sm:text-lg text-center py-1 px-6 rounded-lg mt-2 cursor-pointer hover:bg-red-600 transition-all place-self-end hover:ring-transparent hover:border-transparent focus:ring-transparent focus:border-transparent focus:outline-none"
						onClick={handleSave}
						disabled={isLoading}
					>
						Save
					</button>
				</div>
			</Modal>
		</ConfigProvider>
	);
}
