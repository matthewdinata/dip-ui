// Assets
import mobileDownload from "@/assets/mobileDownload.svg";
import { IoLogoAndroid } from "react-icons/io";

export default function ARwarePage() {
	return (
		<div className="min-h-screen py-2 xl:px-24 md:px-12 sm:px-6 px-2">
			<div className="mt-12 py-12 px-8 md:px-16 flex flex-col items-center gap-16 bg-white drop-shadow-lg rounded-xl">
				<div className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-700 text-center">
					Step into the augmented reality of drug education like never
					before!
				</div>
				<div className="flex flex-col flex-1 gap-8 items-center justify-center">
					<img src={mobileDownload} className="md:w-64 w-48" />
					<div className="text-white bg-red-700 flex flex-1 px-8 md:px-16 py-3 font-medium text-sm sm:text-base md:text-lg rounded-2xl hover:bg-red-600 transition-all cursor-pointer text-center items-center gap-2">
						Download now{" "}
						<>
							<IoLogoAndroid className="text-2xl -mt-1" />
						</>
					</div>
				</div>
				<div className="text-center text-xs sm:text-sm md:text-base xl:px-20 sm:px-8 px-4 font-medium">
					Explore the highs and lows of narcotics in our immersive AR
					game, where learning meets excitement on every corner.
				</div>
			</div>
		</div>
	);
}
