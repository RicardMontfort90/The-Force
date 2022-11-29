class Bullets{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.shootingInterval = undefined;
    }

shooting() {
    this.soothingInterval = setInterval(() => {
        this.x = this.x + 5;
        }, 20)
    }

}