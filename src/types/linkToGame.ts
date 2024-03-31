/**
 * Represents a link to a game, puzzle or crossword
 */
export type LinkToGameType = {
    /**
     * The id of the game
     */
    id: number,
    /**
     * The title of the game.
     */
    title: string, 
    /**
     * The url for the game.
     */
    param: string,
    component: JSX.Element,
}

export type MockGameDataTypes = {
    id:number,
    category:string,
    linkTo:LinkToGameType[],
}