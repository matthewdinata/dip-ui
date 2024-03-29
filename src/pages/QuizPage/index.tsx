const Button = ({
	title,
	link,
	thumbnailImage,
	imageClassName,
}: {
	title: string;
	link: string;
	thumbnailImage?: string;
	imageClassName?: string;
}) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" className="button">
			<button className="md:h-40 md:w-40 bg-[#ca3735] hover:bg-[#ca37356e] text-center text-white hover:text-black min-w-[175px] hover:border-black px-4">
				<div className="button-text">
					{thumbnailImage && (
						<div className="image-container">
							<img
								className={imageClassName}
								src={thumbnailImage}
								alt={title} // Provide alt text for accessibility
							/>
						</div>
					)}
					<span className="text-2xl">{title}</span>
				</div>
			</button>
		</a>
	);
};

export default function QuizPage() {
	return (
		<div className="flex h-full">
			<div className="flex flex-col justify-center items-center gap-16 pt-24 m-auto">
				<div className="text-3xl md:text-5xl font-bold text-center">
					Quiz Yourself!
				</div>
				<div className="flex flex-wrap justify-center gap-10 ">
					<Button
						title="Drugs"
						link="https://docs.google.com/forms/d/e/1FAIpQLSfwytZYKTldmYdbptONKEuVoSguHkEqFgjhl99XhITs_CRvOw/viewform"
						imageClassName="h-[105%] w-[105%]"
					/>
					<Button
						title="Cyber Bully"
						link="https://docs.google.com/forms/d/e/1FAIpQLSduwIZFgi5drIk0b0VAHEtEWjW9tKjVVxms0YJTVDZOvWA_GA/viewform?usp=sf_link"
						imageClassName="h-[105%] w-[105%]"
					/>
					<Button
						title="Vape"
						link="https://docs.google.com/forms/d/e/1FAIpQLSfN89u7PbacF--dHy3-M6WiJ5-y0mSElpll6MhY_yHSSowk8A/viewform?usp=sf_link"
						imageClassName="h-[105%] w-[105%]"
					/>
					<Button
						title="Heritage"
						link="https://docs.google.com/forms/d/e/1FAIpQLSdee7Xxjr4tAP8TGAnCRUIg5BLAVfPRPC5kslhqZoM50M3P3A/viewform"
						imageClassName="h-[105%] w-[105%]"
					/>
				</div>
			</div>
		</div>
	);
}
