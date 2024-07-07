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
}
