class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.falcon = new Player(500, 400, 70, 70);
    this.droplets = [];
    this.points = 0;
    this.generateInterval = null;
    this.backgroundMusic = new Audio('audio/game.mp3');
    this.winAudio = new Audio('audio/win.mp3');
    this.loseAudio = new Audio('audio/tellme.mp3');
    this.bonus = new Audio('audio/bonus.mp3');
    this.shoot = new Audio('audio/shoot.waw');
    this.bomb = new Audio('audio/bomb.mp3');
    this.winCondition = 10;
    this.kills = 0;
  }

  // Generate new enemies and bonus every second
  _generatethings() { 
    this.generateInterval = setInterval(() => { 
      if (this.points < this.winCondition) { 
        const newDroplet = new Droplet();
        // Apply effects
        newDroplet._assignRole();
        newDroplet._assignImage();
        newDroplet._fallLateral();
        // Add to the array
        this.droplets.push(newDroplet);
      }  
    }, 300) // cantidad de cosas que aparecen ( nª Pequeño =  MAS APARICIÓN)
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
        case 'Space' : 
        shootSound.play();
        this.falcon.shoot();
          
          console.log(this.falcon.bullets)
          break;
          default:
          break;
      }
    });
  }



  _Collisions() {
    this.droplets.forEach((droplet) => {
      if ( this.falcon.x < droplet.x + droplet.width && this.falcon.x + this.falcon.width > droplet.x && this.falcon.y < droplet.y + droplet.height && this.falcon.y + this.falcon.height > droplet.y
        ){ 
        if (droplet.role === 'bonus') { this.bonus.play();
          this.points++;
        } else if (droplet.role === 'enemies') {
          this._gameOver(); 
        }
        
        if (this.points === this.winCondition) {
          this._winPage();
        }
        let index = this.droplets.indexOf(droplet);
        this.droplets.splice(index, 1);
      }
    })
  }

  _checkEnemyCollision() { 
    this.droplets.forEach((droplet) => { 
      this.falcon.bullets.forEach((bullet) => { 
        if ( bullet.x < droplet.x + droplet.width && bullet.x + bullet.width > droplet.x && bullet.y < droplet.y + droplet.height && bullet.y + bullet.height > droplet.y) 
        { if (droplet.role === 'enemies') { 
          this.kills++; this.bomb.play(); 
        } else if (droplet.role === 'bonus') {
          this.points--;
        } 
         
          let index = this.droplets.indexOf(droplet);
          this.droplets.splice(index, 1); 
        } 
      })
    })
  }

  _drawDroplets() {
    this.droplets.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    })
  }

  _drawBullets(){
    this.falcon.bullets.forEach((bullet) => {
    this.ctx.drawImage(bullet.image, bullet.x, bullet.y, bullet.width, bullet.height);
    })
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
    this._drawDroplets();
    this._Collisions();
    this._writeScore();
    this._drawBullets();
    this._checkEnemyCollision();
    // window.requestAnimationFrame(this._update.bind(this))
    window.requestAnimationFrame(() => this._update());
  }


  _writeScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Verdana";
    this.ctx.fillText(`Points: ${this.points}`, 850, 50);
    this.ctx.fillText(`Dark Side: ${this.kills}`, 850, 80);
  }


  _gameOver() {
    clearInterval(this.generateInterval);
    canvas.classList.add('hidden');
    const loosePage = document.getElementById("lose-page");
    loosePage.style = "display: block";
    this.backgroundMusic.pause();
    this.loseAudio.play();
  }

  _winPage() {
    clearInterval(this.generateInterval);
    const winPage = document.getElementById('win-page');
    winPage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display:none";
    this.backgroundMusic.pause();
    this.winAudio.play();
    this.droplets = [];
   }


  start() {
    this._update();
    this._generatethings();
    this._assignControls();
    this.backgroundMusic.play();
  }
}

