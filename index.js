import Hanoi from "./game.js";
import readline from "node:readline";

const Tower = new Hanoi(3);
Tower.printStacks();

function question() {
    if (Tower.checkWin()){
        return console.log("You won!");
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question(`Move Rings:\n`, numberPair => {
        const numbers = numberPair.split(" ");
        Tower.moveRing(numbers[0], numbers[1]);
        Tower.printStacks();

        rl.close();
        question();
    });
}
question();