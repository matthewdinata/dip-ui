import { MultiLinkLayer } from "@/components/Layout";
import { MockGameLinkDataTypes } from "@/types/linkToGame";
// import { useState } from "react";

const gameListData: MockGameLinkDataTypes[] = [{
    id: 1,
    title: "Cyber Bully",
    linkTo: [
        {
            id: 1,
            title: "CyberSafe Crosswords",
            url: "cyberbully/cyberSafeCrosswords"
        },
        {
            id: 2,
            title: "Cyber Word Hunt",
            url: "cyberbully/cyberWordHunt"
        }
    ]
    // Append more into this data if there is more games being created
    },
    {
        id:2,
        title: "Vape",
        linkTo: [
            {
                id:1,
                title:"Vape Quest: Unsramble and Learn",
                url: "vape/vapeQuest"
            }
        ]
    }
];

export const CrosswordsPage = () => {
    // TODO, use setgameList if we want to implement the completion of game
    // const [gameList, _setGameList] = useState<MockGameLinkDataTypes[]>(gameListData);
    return (
        <div className="w-full flex overflow-hidden min-w-[200px]">
            <div className="h-full flex flex-col text-center gap-12 md:gap-28 mx-auto py-24">
                <h1>Puzzle</h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {gameListData.map((data) => <MultiLinkLayer key={data.id} title={data.title} linkToArray={data.linkTo} />)}
                </div>
            </div>
        </div>
    )
}
