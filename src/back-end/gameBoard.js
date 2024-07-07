import { ships } from "./ship";
import { hitShip } from "./ship";

export class GameBoard {
  constructor() {
    this.board = Array(15)
      .fill(null)
      .map(() => Array(15).fill(null));
    this.ships = [...ships];
    this.missedAttacks = [];
    this.hitAttacks = [];
  }

  placeShip(shipName, x, y, direction) {
    const ship = this.ships.find((ship) => ship.name === shipName);
    if (!ship) {
      console.log("Incorrect ship name");
      return false;
    }

    if (this.isShipPlaced(shipName)) {
      console.log("Ship already placed");
      return false;
    }

    if (this.isShipOutOfBounds(ship, x, y, direction)) {
      console.log("Ship out of bounds");
      return false;
    }

    if (this.isShipColliding(ship, x, y, direction)) {
      console.log("Ship colliding with another ship");
      return false;
    }

    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        this.board[y][x + i] = ship.name;
      } else {
        this.board[y + i][x] = ship.name;
      }
    }

    return true;
  }

  isShipPlaced(shipName) {
    return this.board.flat().includes(shipName);
  }

  isShipOutOfBounds(ship, x, y, direction) {
    if (direction === "horizontal") {
      return x + ship.length > 15;
    } else {
      return y + ship.length > 15;
    }
  }

  isShipColliding(ship, x, y, direction) {
    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        if (this.board[y][x + i]) {
          return true;
        }
      } else {
        if (this.board[y + i][x]) {
          return true;
        }
      }
    }
    return false;
  }

  receiveAttack(x, y) {
    if (this.board[y][x] === null) {
      this.missedAttacks.push({ x, y });
      //this.board[y][x] = "miss";
      return false;
    }

    const shipName = this.board[y][x];
    this.hitAttacks.push({ x, y });
    //this.board[y][x] = "hit";
    const isSunk = hitShip(shipName);
    if (isSunk) {
      this.ships = this.ships.filter((ship) => ship.name !== shipName);
      console.log("Ship sunk");
    }
    return true;
  }

  allShipsSunk() {
    //return this.ships.length === 0;
    return this.ships.every((ship) => ship.isSunk);
  }
}
