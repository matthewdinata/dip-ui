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
}

export type MockGameDataTypes = {
    id:number,
    title:string,
    linkTo:LinkToGameType[],
}