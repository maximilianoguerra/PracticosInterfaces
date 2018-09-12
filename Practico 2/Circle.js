class Circle {
  constructor() {
    this.posX = 10;
    this.posY = 10;
    this.radio = 10;
    this.color = '#FF0000';
  }
  setValues(paramPosX,paramPosY,paramRadio,paramColor) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = paramColor;
  }
  dibujar(){
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI*2)
    ctx.fill();
    ctx.closePath();
  }
}
