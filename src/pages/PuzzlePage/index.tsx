import { MultiLinkLayer } from "@/components/Layout";
import { MockGameLinkDataTypes } from "@/types/linkToGame";
// import { useState } from "react";
// TODO: Use searchparams for this page. The routes were created so that it is easier to test
const gameListData: MockGameLinkDataTypes[] = [{
    id: 1,
    title: "Heritage",
    linkTo: [
        {
            id: 1,
            title: "Singapore Time Trek",
            url: "heritage/timeTrek"
        },
        {
            id: 2,
            title: "Singapore Time Trivia Match Theme Up",
            url: "heritage/timeTrivia"
        }
    ]
    // Append more into this data if there is more games being created

}];

export const PuzzlesPage = () => {
    // TODO, use setgameList if we want to implement the completion of game
    // const [gameList, _setGameList] = useState<MockGameLinkDataTypes[]>(gameListData);
    return (
        <div className="w-full flex overflow-hidden min-w-[200px]">
            <div className="h-full flex flex-col text-center gap-12 md:gap-28 mx-auto py-16">
                <h1>Puzzle</h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {gameListData.map((data) => <MultiLinkLayer key={data.id} title={data.title} linkToArray={data.linkTo} />)}
                </div>
            </div>
        </div>
    )
}