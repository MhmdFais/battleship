const ships = [
  { name: "shipOne", length: 5, hits: 0, isSunk: false },
  { name: "shipTwo", length: 4, hits: 0, isSunk: false },
  { name: "shipThree", length: 3, hits: 0, isSunk: false },
  { name: "shipFour", length: 3, hits: 0, isSunk: false },
  { name: "shipFive", length: 2, hits: 0, isSunk: false },
];

export function hitShip(shipName) {
  const ship = ships.find((ship) => ship.name === shipName);
  if (!ship) {
    console.log("Incorrect ship name");
    return;
  }
  ship.hits++;
  isSunken(ship);
}

export function isSunken(ship) {
  if (ship.hits >= ship.length) {
    ship.isSunk = true;
  }
}
