import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        whitePlayer : "paras",
        blackPlayer: "harshit",
        moves: []
    })
}, 5000);
