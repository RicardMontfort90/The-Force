class Player {
    constructor(x, y, width, height) {
      this.image = falcon;
      this.x = 900;
      this.y = y;
      this.width = width;
      this.height = height;
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

   }
   
   fallInterval() {
    this.fallInterval = setInterval(() => {
      if (this.y > 600) {
        clearInterval(this.fallInterval);
      }
      this.y = this.y + 1;
    }, 10)
  }
}