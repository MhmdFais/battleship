import { GameBoard } from "./gameBoard";

class Player {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.gameBoard = new GameBoard();
  }
}

export { Player };
