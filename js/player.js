class Player {
    constructor(x, y, width, height) {
      this.image = falcon;
      this.x = 900;
      this.y = y;
      this.width = width;
      this.height = height;
      this.bullets = []
      this.fallInterval = undefined;
      
    }
  
    moveDown() {
        this.x = 900;
        this.y = this.y + 15;
      if (this.y > 600) {
        this.y = 0 - this.height;
      }
    }
  
    moveUp() {
        this.x = 900;
        this.y = this.y - 15;
      if (this.y + this.height < 0) {
        this.y = 600;
      }
    }
  
    shoot() {
      const newBullets = new Bullets(this.x, this.y + (this.height / 2), 40, 40);
      /*if(newBullets.shootingDelay == false && this.bullets.length < 3) {
        this.bullets.push(newBullets);
        newBullets._shooting();
        newBullets.shootingDelay = true;
        setTimeout(() => {
          newBullets.shootingDelay = false;
        }, 800);
      }*/
      //Que cada bulllet nova s'introdueixi a l'array de bullets 
    }
   
    /*_fallLateral() {
      this.fallInterval = setInterval(() => {
        if (this.y > 600) {
          clearInterval(this.fallInterval);
        }
        this.y = this.y + 5;
      }, 0.000001)
    }
    */
   
}