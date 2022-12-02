class Bullets {
    constructor(x, y) {
        this.image = bullet;
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.shootingInterval = undefined;
        this.shootingDelay = false;
    }

     _shooting() {
         this.shootingInterval = setInterval(() => {
             this.x = this.x - 5;
         }, 20);
     }

}