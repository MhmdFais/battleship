import { Ship } from "./ship";
class GameBoard {
  constructor() {
    this.hitAttacks = [];
    this.missedAttacks = [];
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }

  generateDirection() {
    return Math.random() < 0.5 ? "horizontal" : "vertical";
  }

  generateRowCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  generateColumnCoordinate() {
    return Math.floor(Math.random() * 10);
  }

  canPlaceShip(length, row, column, direction) {
    if (direction === "horizontal") {
      if (column + length > 10) {
        return false;
      }
      for (let i = 0; i < length; i++) {
        if (this.board[row][column + i] !== null) {
          return false;
        }
      }
    } else {
      if (row + length > 10) {
        return false;
      }
      for (let i = 0; i < length; i++) {
        if (this.board[row + i][column] !== null) {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(length, row, column, direction) {
    const ship = new Ship(length);
    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        this.board[row][column + i] = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        this.board[row + i][column] = ship;
      }
    }
  }

  placeShipOnBoardRandomly() {
    let shipLengths = [5, 4, 3, 3, 2];
    for (let length of shipLengths) {
      let placed = false;
      while (!placed) {
        let row = this.generateRowCoordinate();
        let column = this.generateColumnCoordinate();
        let direction = this.generateDirection();
        if (this.canPlaceShip(length, row, column, direction)) {
          this.placeShip(length, row, column, direction);
          placed = true;
        }
      }
    }
  }
}
