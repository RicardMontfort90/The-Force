class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.falcon = new Player(500, 400, 70, 70);
    this.droplets = [];
    this.points = 0;
    this.generateInterval = null;
    this.bullets = [];
    this.healthBar = new HealthBar;
  }

  _generatethings() {
    // Generate new droplet every second
    this.generateInterval = setInterval(() => {
      const newDroplet = new Droplet();
      // Apply effects
      newDroplet._assignRole();
      newDroplet._assignImage();
      newDroplet._fallLateral();
      // Add to the array
      this.droplets.push(newDroplet);
    }, 800)
  }

  
  
  _drawDroplets() {
    this.droplets.forEach((elem) => {
      // Si pintamos círculos:
      // this.ctx.beginPath()
      // this.ctx.fillStyle = "black";
      // this.ctx.arc(elem.x, elem.y, elem.width, 0, 2 * Math.PI);
      // this.ctx.fill();
      // this.ctx.closePath()
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
  }

  _assignControls() {
    document.addEventListener('keydown', (e) => {
      console.log(e.code);
      switch (e.code) {
        case 'ArrowDown':
          this.falcon.moveDown();
          break;
        case 'ArrowUp':
          this.falcon.moveUp();
          break;
        case 'Space': // Bullets
          this.bullets.shoot() ////////////////////////////////////
          break;
      }
    })
  }

  _Collisions() {
    this.droplets.forEach((droplet) => {
      if (
        (
          // Compruebo si mi meatball está dentro de la X + width del droplet
          this.falcon.x >= droplet.x && this.falcon.x <= droplet.x + droplet.width ||
          this.falcon.x + this.falcon.width >= droplet.x && this.falcon.x + this.falcon.width <= droplet.x + droplet.width ||
          // Incluso si mi meatball es más grande que el droplet
          droplet.x >= this.falcon.x && droplet.x <= this.falcon.x + this.falcon.width
        ) &&
        (
          // Lo mismo con el eje Y
          this.falcon.y >= droplet.y && this.falcon.y <= droplet.y + droplet.height ||
          this.falcon.y + this.falcon.height >= droplet.y && this.falcon.y + this.falcon.height <= droplet.y + droplet.height ||
          droplet.y >= this.falcon.y && droplet.y <= this.falcon.y + this.falcon.height
        )
      ) {
        if (droplet.role === 'bonus') {
          this.points++  ; // this.points++ && this.healthBar++ ???????
        } else if (droplet.role === 'enemies') {
          this.points-- ; // this.points-- && this.healthBar-- ????????
        }
        if (this.points < 0) { // this.points && this.healthBar ????????
          this._gameOver();
        }
        let index = this.droplets.indexOf(droplet);
        this.droplets.splice(index, 1);
      }
    })
  }

  _writeScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Verdana";
    this.ctx.fillText(`Points: ${this.points}`, 850, 50);
  }

//////////////////////////////////////////////////////////////////////////////////////
  _DrawHealthBar() {   
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "#333";
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }
//////////////////////////////////////////////////////////////////////////////////////
  _drawBullets() {
    this.bullets.forEach((elem) => {
      
       this.ctx.beginPath()
       this.ctx.fillStyle = "black";
       this.ctx.arc(elem.x, elem.y, elem.width, 0, 2 * Math.PI);
       this.ctx.fill();
       this.ctx.closePath()
      
    })
  }
/////////////////////////////////////////////////////////////////////////////////////
  _drawFalcon() {
    this.ctx.drawImage(this.falcon.image, this.falcon.x, this.falcon.y, this.falcon.width, this.falcon.height);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _gameOver() {
    clearInterval(this.generateInterval);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }

  _update() {
    this._clean();
    this._drawFalcon();
    this._drawDroplets();
    this._Collisions();
    this._writeScore();
    this._drawBullets();
    this._DrawHealthBar();
    // window.requestAnimationFrame(this._update.bind(this))
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._generatethings();
    this._assignControls();
  }

  
}

