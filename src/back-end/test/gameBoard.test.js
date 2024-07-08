import { GameBoard } from "../gameBoard";

let gameBoard = new GameBoard();

test("Place shipOne, Horizontal: Correct", () => {
  expect(gameBoard.placeShip("shipOne", 0, 0, "horizontal").toBeTruthy);
});

test("Place shipOne, Horizontal: Incorrect", () => {
  //const gameBoard = new GameBoard();
  expect(gameBoard.placeShip("shipOne", 0, 0, "horizontal").toBeTruthy);
});

test("Place shipTwo, Vertical: Correct", () => {
  //const gameBoard = new GameBoard();
  expect(gameBoard.placeShip("shipTwo", 1, 1, "vertical").toBeTruthy);
});

test("Place shipThree, Vertical: Incorrect", () => {
  //const gameBoard = new GameBoard();
  expect(gameBoard.placeShip("shipThree", 1, 1, "vertical").toBeTruthy);
});
