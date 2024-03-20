// Constants - types
import { userInfoType } from "@/types/userTypes";

// Assets
import avatar1 from "@/assets/avatar1@3x.png";
import avatar2 from "@/assets/avatar2@3x.png";
import avatar3 from "@/assets/avatar3@3x.png";
import avatar4 from "@/assets/avatar4@3x.png";
import avatar5 from "@/assets/avatar5@3x.png";
import avatar6 from "@/assets/avatar6@3x.png";
import avatar7 from "@/assets/avatar7@3x.png";
import avatar8 from "@/assets/avatar8@3x.png";

export const getUserAvatar = (userInfo: userInfoType) => {
	const avatars = [
		avatar1,
		avatar2,
		avatar3,
		avatar4,
		avatar5,
		avatar6,
		avatar7,
		avatar8,
	];
	const avatarIndex = userInfo.avatarId - 1;
	return avatarIndex >= 0 && avatarIndex < avatars.length
		? avatars[avatarIndex]
		: avatars[0]; // default return
};
