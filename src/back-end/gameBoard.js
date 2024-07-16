import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.board = this.generateBoard();
    this.shipOne = new Ship(5, "one");
    this.shipTwo = new Ship(4, "two");
    this.shipThree = new Ship(3, "three");
    this.shipFour = new Ship(3, "four");
    this.shipFive = new Ship(2, "five");

    this.ships = [
      this.shipOne,
      this.shipTwo,
      this.shipThree,
      this.shipFour,
      this.shipFive,
    ];
  }

  generateBoard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board.push(Array(10).fill(null));
    }
    return board;
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

  checkValidPlacement(row, col, direction, length) {
    if (direction === "horizontal") {
      if (col + length > 10) {
        return false;
      }
      for (let i = col; i < col + length; i++) {
        if (this.board[row][i] !== null) {
          return false;
        }
      }
    } else {
      if (row + length > 10) {
        return false;
      }
      for (let i = row; i < row + length; i++) {
        if (this.board[i][col] !== null) {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(row, col, direction, length) {
    if (direction === "horizontal") {
      for (let i = col; i < col + length; i++) {
        this.board[row][i] = "ship";
      }
    } else {
      for (let i = row; i < row + length; i++) {
        this.board[i][col] = "ship";
      }
    }
  }

  placeShipRandomly() {
    this.ships.forEach((ship) => {
      let placed = false;
      while (!placed) {
        const direction = this.generateDirection();
        const row = this.generateRowCoordinate();
        const col = this.generateColumnCoordinate();
        if (this.checkValidPlacement(row, col, direction, ship.length)) {
          this.placeShip(row, col, direction, ship.length);
          placed = true;
        }
      }
    });
  }

  receiveAttack(row, col) {
    if (this.board[row][col] === "hit" || this.board[row][col] === "miss") {
      //throw new Error("You have already attacked this position");
      return;
    }

    if (this.board[row][col] === "ship") {
      this.board[row][col] = "hit";
      //this.changeCellInnerHTML(row, col, "hit");
      this.ships.forEach((ship) => {
        if (ship.length === 0) {
          return;
        }
        if (this.isSunk(ship)) {
          ship.isSunk = true;
        }
      });
      return "hit";
    } else {
      this.board[row][col] = "miss";
      //this.changeCellInnerHTML(row, col, "miss");
      return "miss";
    }
  }

  receiveAttackRandomly() {
    let attacked = false;
    let result;
    while (!attacked) {
      const row = this.generateRowCoordinate();
      const col = this.generateColumnCoordinate();
      result = this.receiveAttack(row, col);
      if (result === "hit" || result === "miss") {
        attacked = true;
      }
    }
    return result;
  }

  isSunk(ship) {
    let sunk = true;
    for (let i = 0; i < ship.length; i++) {
      if (this.board[row][col] !== "hit") {
        sunk = false;
        break;
      }
    }
    return sunk;
  }

  hasAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk);
  }
}

export { GameBoard };
