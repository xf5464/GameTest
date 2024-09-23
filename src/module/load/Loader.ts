import { ModuleName } from "../common/ModuleName";

export default class Loader
{
    constructor()
    {
        console.log("----------------------Loader start----------------------");

        if (window)
        {
            if ((window as any).createButton == undefined)
            {
        
            }
            else
            {
                (window as any).createButton(function(){
                    (window as any).loadScript(ModuleName.GAME, function(){
                        console.log("game load complete")
                    })
                })
            }
        }

    }


}

new Loader();