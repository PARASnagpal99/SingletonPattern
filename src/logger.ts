import { GameManager} from "./store";

export function startLogger(){
       setInterval(()=>{
          GameManager.getInstance().logState();
       },5000);
};