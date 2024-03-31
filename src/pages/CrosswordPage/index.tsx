import { MultiLinkLayer } from "@/components/Layout";
import { MockGameDataTypes } from "@/types/linkToGame";
import { useSearchParams } from "react-router-dom";
import { CyberSafeCrosswordsFrame } from "./components/CyberSafeCrossWords";
import { CyberWordHunterFrame } from "./components/CyberWordHunt";
import { VapeQuestFrame } from "./components/VapeQuest";
// import { useState } from "react";

const gameListData: MockGameDataTypes[] = [{
    id: 1,
    category: "Cyber Bully",
    linkTo: [
        {
            id: 1,
            title: "CyberSafe Crosswords",
            param: "cyberSafeCrosswords",
            component: <CyberSafeCrosswordsFrame />,
        },
        {
            id: 2,
            title: "Cyber Word Hunt",
            param: "cyberWordHunt",
            component: <CyberWordHunterFrame />,
        }
    ]
    // Append more into this data if there is more games being created
    },
    {
        id:2,
        category: "Vape",
        linkTo: [
            {
                id:1,
                title:"Vape Quest: Unscramble and Learn",
                param: "vapeQuest",
                component: <VapeQuestFrame />,
            }
        ]
    }
];

export const CrosswordsPage = () => {
    // TODO, use setgameList if we want to implement the completion of game
    // const [gameList, _setGameList] = useState<MockGameLinkDataTypes[]>(gameListData);
    // Get the searchparams from the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // get the value of ?game=...
    const gameParams = searchParams.get('game');
    const categoryParams = searchParams.get('category');

    // Filter game category array according to categoryParams
    const filteredGame = gameListData.find(game => game.category === categoryParams);
    // Filter the game's linkTo array according to gameParams
    const filteredComponent = filteredGame?.linkTo.find(link => link.param == gameParams);
    
    return (
        <div className="w-full flex overflow-hidden min-w-[200px]">
            {filteredComponent?.component}
            {!gameParams && 
            <div className="h-full flex flex-col text-center gap-12 md:gap-28 mx-auto py-16">
                <h1>Puzzle</h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {gameListData.map((data) => <MultiLinkLayer key={data.id} category={data.category} linkToArray={data.linkTo} setSearchParams={setSearchParams} />)}
                </div>
            </div>}
        </div>
    )
}
