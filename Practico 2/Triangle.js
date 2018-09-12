
class Triangle {
  constructor() {
    this.punto1= new Punto(200,200);
    this.punto2= new Punto(300,250);
    this.punto3= new Punto(300,200);
    // this.punto1X = 200;
    // this.punto1Y = 200;
    // this.punto2X = 300;
    // this.punto2Y = 250;
    // this.punto3X = 300;
    // this.punto3Y = 200;
  }
  dibujar(){
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#8A6642';
    ctx.moveTo(this.punto1.posX,this.punto1.posY);
    ctx.lineTo(this.punto2.posX,this.punto2.posY);
    ctx.lineTo(this.punto3.posX,this.punto3.posY);
    ctx.closePath();
    ctx.fill();
  }
}
