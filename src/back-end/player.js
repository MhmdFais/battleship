import { GameBoard } from "./gameBoard";

class Player {
  constructor(name, isComputer) {
    this.name = name;
    this.isComputer = isComputer;
    this.gameBoard = new GameBoard();
  }
}

export { Player };
