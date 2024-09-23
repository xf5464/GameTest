import { ModuleName } from "./module/common/ModuleName";
import Loader from "./module/load/Loader";

console.log("----------------------App start1----------------------")
// new Game()

if (window)
{
    if ((window as any).loadScript == undefined)
    {

    }
    else
    {
        (window as any).loadScript(ModuleName.LOADER, function(){
            console.log("load complete")
        })
    }
}