import { GameBoard } from "./gameBoard";

class Player {
  constructor(playerName, isComputer) {
    this.name = playerName;
    this.isComputer = isComputer;
    this.gameBoard = new GameBoard();
  }

  placeShipOnBoard(shipName, x, y, direction) {
    return this.gameBoard.placeShip(shipName, x, y, direction);
  }

  playerAttack(x, y, enemy) {
    return enemy.gameBoard.receiveAttack(x, y);
  }

  computerAttack(enemy) {
    let x = Math.floor(Math.random() * 15);
    let y = Math.floor(Math.random() * 15);
    return enemy.gameBoard.receiveAttack(x, y);
  }
}

export default Player;
