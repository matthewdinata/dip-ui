import { MultiLinkLayer } from "@/components/Layout";
import { useState } from "react";
type MockGameLinkDataTypes = {
    id:number,
    title:string,
    linkTo:LinkToGameType[],
}
const gameListData:MockGameLinkDataTypes[] = [{
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

export const PuzzlePage = () => {
    const [gameList, setGameList] = useState<MockGameLinkDataTypes[]>(gameListData);
  return (
    <div className="w-full flex overflow-hidden min-w-[200px]">
        <div className="h-full flex flex-col text-center gap-12 md:gap-28 mx-auto py-16">
            <h1>Puzzle</h1>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {gameList.map((data) => <MultiLinkLayer key= {data.id} title={data.title} linkToArray={data.linkTo}/>)}
            </div>
        </div>

    </div>
  )
}

{/* <>
<h1>Puzzles</h1>
<div className="container">
    <div className="row">
        <div className="box" id="cyberbullying">
            <h2 className="title-cyberbullying">Cyber Bully</h2>
            <div className="border-top"></div>
            <p className="game-names">
                <a href="Cybersafe.html" target="_blank">CyberSafe Crosswords</a>
            </p>
            <p className="game-names">
                <a href="Cyber Word Hunt.html" target="_blank">Cyber Word Hunt</a>
            </p>
        </div>
        <div className="box" id="vaping">
            <h2 className="title-vaping">Vape</h2>
            <div className="border-top"></div>
            <p className="game-names"><a href="vape.html" target="_blank">Vape Quest: Unscramble and Learn</a></p>
        </div>
        <div className="box" id="heritage">
            <h2 className="title-heritage">Heritage</h2>
            <div className="border-top"></div>
            <p className="game-names"><a href="time.html" target="_blank">Singapore Time Trek</a></p>
            <p className="game-names"><a href="match.html" target="_blank">Singapore Time Trivia Match Them Up</a></p>
        </div>
    </div>
</div>
</> */}