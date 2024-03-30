import { MultiLinkLayer } from "@/components/Layout";
import { MockGameDataTypes } from "@/types/linkToGame";
import { useSearchParams } from "react-router-dom";
import { TimeTrekFrame } from "./components/TimeTrek";
import { TimeTriviaFrame } from "./components/TimeTrivia";
// import { useState } from "react";
const gameListData: MockGameDataTypes[] = [{
    id: 1,
    title: "Heritage",
    linkTo: [
        {
            id: 1,
            title: "Singapore Time Trek",
            param: "timeTrek"
        },
        {
            id: 2,
            title: "Singapore Time Trivia Match Them Up",
            param: "timeTrivia"
        }
    ]
    // Append more into this data if there is more games being created

}];

export const PuzzlesPage = () => {
    // TODO, use setgameList if we want to implement the completion of game
    // const [gameList, _setGameList] = useState<MockGameLinkDataTypes[]>(gameListData);

    // Get the searchparams from the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // get the value of ?game=...
    const gameParams = searchParams.get('game');
    return (
        <div className="w-full flex overflow-hidden min-w-[200px]">
            {/* Check searchParams */}
            {/* Is this the best practice? If not. TODO: Follow Best Practice */}
            {gameParams === "timeTrek" && <TimeTrekFrame />}
            {gameParams === "timeTrivia" && <TimeTriviaFrame />}
            {!gameParams && 
            <div className="h-full flex flex-col text-center gap-12 md:gap-28 mx-auto py-16">
                <h1>Puzzle</h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {gameListData.map((data) => <MultiLinkLayer key={data.id} title={data.title} linkToArray={data.linkTo} setSearchParams={setSearchParams} />)}
                </div>
            </div>}

        </div>
    )
}