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
    url: string,
}

export type MockGameLinkDataTypes = {
    id:number,
    title:string,
    linkTo:LinkToGameType[],
}