const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 1000;
const height = canvas.height = 600;


class HealthBar {
  constructor(x, y, w, h, maxHealth, color) {
    this.x = 30;
    this.y = 20;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;
  }

  _DrawHealthBar(context) {
    context.lineWidth = 5;
    context.strokeStyle = "#333";
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }

  Health(val) {
    if (val >= 0) {
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
  }
}

let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;

const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");

const frame = function() {
  context.clearRect(0, 0, width, height);
  healthBar._DrawHealthBar(context);
  requestAnimationFrame(frame);
}

canvas.onclick = function() {
  health -= 10;
  healthBar.Health(health);
};

frame();