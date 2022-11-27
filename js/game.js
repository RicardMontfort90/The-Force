class Game{
  constructor(context) {
    this.ctx = context;
    this.falcon = new Player(500, 700, 50, 50);
    
  }

  _drawFalcon() {
    this.ctx.drawImage(this.falcon.image, this.falcon.x, this.falcon.y, this.falcon.width, this.falcon.height);
  }

  /*_clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }*/


  //_assignControls() {
    // Controles del teclado
   // document.addEventListener('keydown', (event) => {
     // switch (event.code) {
       // case 'ArrowLeft':
         // this.meatball.moveLeft();
          //break;
        //case 'ArrowRight':
          //this.meatball.moveRight();
          //break;
        //default:
        //  break;
      //}
    //});
  //}

  _update() {
    //this._clean();
    this._drawFalcon();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }


}