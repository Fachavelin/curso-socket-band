const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io;

    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      console.log('Cliente connectado');

      socket.emit('current-bands', this.bandList.getBands());

      socket.on('votar-band', (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit('current-bands', this.bandList.getBands());
      });

      socket.on('borrar-band', (id) => {
        this.bandList.removeBand(id);
        this.io.emit('current-bands', this.bandList.getBands());
      });

      socket.on('cambiar-nombre', ({ id, nombre }) => {
        this.bandList.changeName(id, nombre);
        this.io.emit('current-bands', this.bandList.getBands());
      });

      socket.on('nueva-band', (nombre) => {
        this.bandList.addBand(nombre);
        this.io.emit('current-bands', this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
