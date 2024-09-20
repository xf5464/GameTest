import { SomeLogic } from "../logic/SomeLogic";

export class Game
{
    constructor()
    {
        console.log("----------------------Game start----------------------");
        const logic = new SomeLogic()
    }
}

const game = new Game();