class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.falcon = new Player(500, 400, 70, 70);
    this.droplets = [];
    this.points = 0;
    this.generateInterval = null;
  }

  _assignControls() {
    //Controles del teclado
   document.addEventListener('keydown', (event) => {
     switch (event.code) {
       case 'ArrowUp':
         this.falcon.moveUp();
         break;
       case 'ArrowDown':
         this.falcon.moveDown();
         break;
       default:
         break;
     }
   })
 }

  _writeScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Verdana";
    this.ctx.fillText(`Points: ${this.points}`, 850, 25);
  }

  _drawFalcon() {
    this.ctx.drawImage(this.falcon.image, this.falcon.x, this.falcon.y, this.falcon.width, this.falcon.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawFalcon();
    this._writeScore();
    // window.requestAnimationFrame(this._update.bind(this))
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._assignControls();
  }
}