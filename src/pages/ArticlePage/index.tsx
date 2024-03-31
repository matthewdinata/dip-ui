import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchArticle } from "@/api";
import { Spinner } from "@/components/Spinner";
import { useToast } from "@/hooks/useToast";

interface ParsedContentType {
	news_article: string;
}

const ArticlePage = () => {
	// Get the searchparams from the URL
	const [searchParams] = useSearchParams();
	const url = searchParams.get("url");
	const title = searchParams.get("title");
	const urlToImage = searchParams.get("urlToImage");
	const publishedAt = searchParams.get("publishedAt");

	const { data, isLoading, isError } = useQuery("article", () =>
		fetchArticle(url ?? "")
	) || { data: null, isLoading: true, isError: false };

	// Get ToastCreate function from hook
	const { ToastCreate } = useToast();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
	}, []);

	if (isLoading) {
		return (
			<div className="elative w-full h-[calc(100vh-3.5rem)] py-2 flex items-center justify-center">
				<Spinner />
			</div>
		);
	}

	if (isError) {
		ToastCreate({
			message: "Fail to fetch article",
			description: "Something went wrong with fetching the article",
			placement: "topRight",
			toastType: "error",
		});
	}

	const parsedContent: ParsedContentType | null = data
		? (JSON.parse(data) as ParsedContentType)
		: null;

	return (
		<div className="min-h-screen">
			<div className="flex flex-col pb-12 pt-8 px-4 md:pb-12 md:pt-24 md:px-20 gap-8">
				<div className="text-3xl md:text-5xl font-bold text-center md:text-center">
					{title}
				</div>
				<img
					src={urlToImage || ""}
					alt={title || ""}
					className="flex justify-center h-auto w-full"
				/>
				<h3>Published at: {publishedAt?.split("T")[0]}</h3>
				<p
					className="text-base md:text-2xl text-justify"
					style={{ lineHeight: "2" }}
				>
					{parsedContent?.news_article}
				</p>
			</div>
		</div>
	);
};

export default ArticlePage;
