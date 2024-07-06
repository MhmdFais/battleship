import { hitShip } from "./ship";

test("Hit shipOne: Alive", () => {
  const shipName = "shipOne";
  hitShip(shipName);
  hitShip(shipName);
  hitShip(shipName);
  expect(hitShip(shipName).toBeFalsy);
});

test("Hit shipFive: Sunken", () => {
  const shipName = "shipFive";
  hitShip(shipName);
  hitShip(shipName);
  expect(hitShip(shipName).toBeTruthy);
});

test("Hit shipSix: Incorrect ship name", () => {
  const shipName = "shipSix";
  expect(hitShip(shipName).toBeUndefined);
});

test("Hit shipThree: Sunken", () => {
  const shipName = "shipThree";
  hitShip(shipName);
  hitShip(shipName);
  hitShip(shipName);
  hitShip(shipName);
  expect(hitShip(shipName).toBeTruthy);
});
