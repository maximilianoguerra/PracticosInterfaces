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
  dibujarConImagen(image,ctx){
    ctx.beginPath();
    ctx.fillStyle = image;
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI*2)
    ctx.fill();
    ctx.closePath();
  }
  dibujarConGradiente(){
    let gradient = ctx.createLinearGradient(this.posX-this.radio,this.posY,this.posX+this.radio,this.posY);
    gradient.addColorStop(0,'black')
    gradient.addColorStop(1/2,'yellow')
    gradient.addColorStop(1,'red')
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI*2)
    ctx.fill();
    ctx.closePath();
  }
  dibujarConGradienteRadial(){
    let gradient = ctx.createRadialGradient(this.posX,this.posY,this.radio/8,this.posX,this.posY,this.radio);
    gradient.addColorStop(0,'black')
    gradient.addColorStop(1/2,'yellow')
    gradient.addColorStop(1,'red')
    ctx.beginPath();
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("Texto en el Canvas",this.posX-this.radio,this.posY-(this.radio+10));
    ctx.fillStyle = gradient;
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI*2)
    ctx.fill();
    ctx.closePath();
  }
  isCkicked(x,y){
    let d=Math.Sqrt(Math.Pow(this.posX-x)+Math.Pow(this.posY-y))
    if(this.radio>d){
      return true;
    }
    return false;
  }

}
