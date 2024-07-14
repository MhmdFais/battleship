import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
    this.hitShots = [];
    this.currentCoords = [];
    this.surroundingCoords = [];
    this.surroundingShots = [];
    this.generateShipMap();
  }

  receiveAttack(coordinates) {
    const ship = this.getShip(coordinates);

    if (ship && !ship.sunk) {
      ship.hit();
      this.hitShots.push(coordinates);
      this.currentCoords.splice(
        findIndexofItemInArray(this.currentCoords, coordinates),
        1
      );
      return true;
    } else {
      this.missedShots.push(coordinates);
      return false;
    }
  }

  hasAllShipsBeenSunk() {
    return this.ships.every((ship) => ship.sunk);
  }

  getShip(coordinates) {
    for (const ship of this.ships) {
      for (const coordinate of ship.coordinates) {
        if (arraysEqual(coordinate, coordinates)) {
          return ship.ship;
        }
      }
    }
    return false;
  }

  getShipSurroundingCoords(coordinate) {
    for (const ship of this.ships) {
      for (const coord of ship.coords) {
        if (arraysEqual(coord, coordinate)) {
          return ship.surroundingCoords;
        }
      }
    }
    return null;
  }

  generateShipMap() {
    const shipLengths = [5, 4, 3, 3, 2];
    for (const length of shipLengths) {
      this.ships.push(this.createShip(length));
    }
    this.surroundingCoords = removeDuplicateArrays(this.surroundingCoords);
  }

  createShip(length, x_coord = null, y_coord = null) {
    const { coords, surroundingCoords } = this.generateCoords(
      length,
      x_coord,
      y_coord
    );
  }

  generateCoord(length, x_coord = null, y_coord = null) {
    let x = x_coord === null ? Math.floor(Math.random() * 10) : x_coord;
    let y = y_coord === null ? Math.floor(Math.random() * 10) : y_coord;
    let direction = Math.random() > 0.5 ? "horizontal" : "vertical";
    let attempts = 0;
    const maxAttempts = 200;
    const coords = [];
    const surroundingCoords = [];

    while (attempts < maxAttempts) {
      attempts++;
      if (
        this.isValidCoord(x, y, length, direction) &&
        !this.predictCollisionWithCurrentCoords(x, y, length, direction) &&
        !this.predictCollisionWithSurroundingCoords(x, y, length, direction)
      ) {
        break;
      }
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    for (let i = 0; i < length; i++) {
      if (direction === "horizontal") {
        coords.push([x + i, y]);
        this.currentCoords.push([x + i, y]);
      } else {
        coords.push([x, y + i]);
        this.currentCoords.push([x, y + i]);
      }
    }

    surroundingCoords = this.getSurroundingCoords(coords, length, direction);
    this.surroundingCoords.push(...surroundingCoords);

    return { coords, surroundingCoords };
  }

  getSurroundingCoords(coords, length, direction) {
    const surroundingCoords = [];

    surroundingCoords.push(this.getUpperRowCoords(coords, length, direction));
    surroundingCoords.push(this.getLowerRowCoords(coords, length, direction));
    surroundingCoords.push(this.getLeftColumnCoords(coords, length, direction));
    surroundingCoords.push(
      this.getRightColumnCoords(coords, length, direction)
    );

    return surroundingCoords;
  }

  getUpperRowCoords(coords, length, direction) {
    const upperRowCoords = [];
    let [x_coord, y_coord] = coords[0];

    y_coord--;
    x_coord--;

    let upperRowLength = direction === "horizontal" ? length + 2 : 3;
    let upperRowWidth = direction === "horizontal" ? 3 : length + 2;

    // check the bound also
    for (let i = 0; i < upperRowLength; i++) {
      for (let j = 0; j < upperRowWidth; j++) {
        upperRowCoords.push([x_coord + i, y_coord + j]);
      }
    }

    return upperRowCoords;
  }

  getLowerRowCoords(coords, length, direction) {
    const lowerRowCoords = [];
    let [x_coord, y_coord] = coords[coords.length - 1];

    y_coord++;
    x_coord--;

    let lowerRowLength = direction === "horizontal" ? length + 2 : 3;
    let lowerRowWidth = direction === "horizontal" ? 3 : length + 2;

    // check the bound also
    for (let i = 0; i < lowerRowLength; i++) {
      for (let j = 0; j < lowerRowWidth; j++) {
        lowerRowCoords.push([x_coord + i, y_coord + j]);
      }
    }

    return lowerRowCoords;
  }

  getLeftColumnCoords(coords, length, direction) {
    const leftColumnCoords = [];
    let [x_coord, y_coord] = coords[0];

    y_coord--;
    x_coord--;

    let leftColumnLength = direction === "horizontal" ? 3 : length + 2;
    let leftColumnWidth = direction === "horizontal" ? length + 2 : 3;

    // check the bound also
    for (let i = 0; i < leftColumnLength; i++) {
      for (let j = 0; j < leftColumnWidth; j++) {
        leftColumnCoords.push([x_coord + i, y_coord + j]);
      }
    }

    return leftColumnCoords;
  }

  getRightColumnCoords(coords, length, direction) {
    const rightColumnCoords = [];
    let [x_coord, y_coord] = coords[coords.length - 1];

    y_coord--;
    x_coord++;

    let rightColumnLength = direction === "horizontal" ? 3 : length + 2;
    let rightColumnWidth = direction === "horizontal" ? length + 2 : 3;

    // check the bound also
    for (let i = 0; i < rightColumnLength; i++) {
      for (let j = 0; j < rightColumnWidth; j++) {
        rightColumnCoords.push([x_coord + i, y_coord + j]);
      }
    }

    return rightColumnCoords;
  }

  predictCollisionWithSurroundingCoords(x, y, length, direction) {
    const surroundingCoords = this.getSurroundingCoords(
      [[x, y]],
      length,
      direction
    );
    for (const coord of surroundingCoords) {
      if (this.surroundingCoords.some((c) => arraysEqual(c, coord))) {
        return true;
      }
    }
    return false;
  }

  predictCollisionWithCurrentCoords(x, y, length, direction) {
    for (let i = 0; i < length; i++) {
      if (direction === "horizontal") {
        if (
          this.currentCoords.some((coord) => arraysEqual(coord, [x + i, y]))
        ) {
          return true;
        }
      } else {
        if (
          this.currentCoords.some((coord) => arraysEqual(coord, [x, y + i]))
        ) {
          return true;
        }
      }
    }
    return false;
  }

  isValidCoord(x, y, length, direction) {
    if (direction === "horizontal") {
      return x + length <= 10;
    } else {
      return y + length <= 10;
    }
  }
}

function findIndexofItemInArray(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (arraysEqual(array[i], item)) {
      return i;
    }
  }
  return -1;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function removeDuplicateArrays(arrays) {
  const uniqueArrays = new Set(arrays.map(JSON.stringify));
  return Array.from(uniqueArrays).map(JSON.parse);
}

export { GameBoard };
