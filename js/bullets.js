class Bullets {
    constructor(x, y, width, height) {
        this.image = bullet;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.shootingInterval = undefined;
        this.shootingDelay = false;
    }

     _shooting() {
         this.shootingInterval = setInterval(() => {
             this.x = this.x + 5;
         }, 20);
     }

}