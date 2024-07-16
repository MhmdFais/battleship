class Ship {
  constructor(length) {
    this.length = length;
    this.number_hit = 0;
    this.isSunk = false;
  }

  hit() {
    if (this.isSunk) {
      return;
    }
    this.number_hit += 1;
    if (this.number_hit === this.length) {
      this.isSunk = true;
    }
  }

  isSunk() {
    if (this.number_hit === this.length) {
      return true;
    }
  }
}

export { Ship };
