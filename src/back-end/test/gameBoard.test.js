import { GameBoard } from "../gameBoard";

let gameBoard = new GameBoard();

test("Place shipOne, Horizontal: Correct", () => {
  expect(gameBoard.placeShip("shipOne", 0, 0, "horizontal")).toBeTruthy();
});

test("Place shipOne, Horizontal: Incorrect -- SHIP ALREADY PLACED", () => {
  expect(gameBoard.placeShip("shipOne", 0, 0, "horizontal")).toBeFalsy();
});

test("Place shipTwo, Vertical: Correct", () => {
  expect(gameBoard.placeShip("shipTwo", 1, 1, "vertical")).toBeTruthy();
});

test("Place shipThree, Vertical: Incorrect -- SHIP OVERLAPPING", () => {
  expect(gameBoard.placeShip("shipThree", 1, 1, "vertical")).toBeFalsy();
});

test("Place shipTwo, Vertical: Incorrect -- SHIP ALREADY PLACED", () => {
  expect(gameBoard.placeShip("shipTwo", 1, 1, "vertical")).toBeFalsy();
});

test("Place shipThree, Vertical: Incorrect -- SHIP ALREADY PLACED", () => {
  expect(gameBoard.placeShip("shipThree", 1, 1, "vertical")).toBeFalsy();
});

test("Attempting to remove a ship that was never placed", () => {
  expect(gameBoard.removeShip("shipFive")).toBeFalsy();
});

test("Verify that checkAllShipsSunk returns true after attacking and sinking all ships", () => {
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(1, 1);
  expect(gameBoard.allShipsSunk()).toBeTruthy();
});
