class Ship {
  constructor(length, name) {
    this.length = length;
    this.name = name;
    this.number_hit = 0;
    this.isSunk = false;
  }

  hit() {
    this.number_hit += 1;
    if (this.number_hit === this.length) {
      this.isSunk = true;
    }
  }

  isSunk() {
    return this.isSunk;
  }
}

export { Ship };
