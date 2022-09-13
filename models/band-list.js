const Band = require('./band');

class BandList {
  constructor() {
    this.bands = [
      new Band('Slayer'),
      new Band('Megadeth'),
      new Band('King Diamond'),
      new Band('Megadeth'),
    ];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }
}

module.exports = BandList;
