
class Droplet {
  constructor() {
    this.x = Math.floor(Math.random() * 0);
    this.y = Math.floor(Math.random() * 550);
    this.width = 50;
    this.height = 50;
    this.role = null;
    this.image = null;
    this.fallInterval = null;
  }

  _fallLateral() {
    this.fallInterval = setInterval(() => {
      if (this.x > 1000) {
        clearInterval(this.fallInterval);
      }
      this.x = this.x + 3;
    }, 4)  // velocidad de aparición ( nª MÁS PEQUEÑ0 = Mas velocidad)
  }

  _assignRole() {
    // Una manera de hacer proporción de malos vs. buenos
    if (Math.floor(Math.random() * 10) > 1) {
      this.role = 'enemies'; 
    } else {
      this.role = 'bonus'; 
      
    } 
  }

  _assignImage() {
    // En función del rol asigno una imagen
    // Siempre tendrá que ser llamado después del _assignRole, si no, no tiene rol
    if (this.role === 'enemies') {
      this.image = malo;
    } else {
      this.image = bonusImages[Math.floor(Math.random() * bonusImages.length)];
      
    }
  }
}