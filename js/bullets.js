class Bullet {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.shootInterval = undefined;
        this.image = bullet;
    }

    _shootBullet () {
        this.shootInterval = setInterval(() => {
            if (this.x < -15) {
                clearInterval(this.shootInterval);
            } 
                this.x = this.x - 12;
        }, 5);
    }
}
