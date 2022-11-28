class Player {
    constructor(x, y, width, height) {
      this.image = falcon;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    moveDown() {
        this.x = 20
        this.y = this.y + 15;
        if (this.y > 600) {
            this.y = 0 - this.height;
        }
     }
    
     moveUp() {
        this.x = 20
        this.y = this.y - 15;
        if ( this.y + this.height < 0) {
            this.y = 600
        }
     }
  }
