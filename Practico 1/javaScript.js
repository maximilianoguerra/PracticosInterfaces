var ctx = document.getElementById("canvas").getContext("2d");
let ancho = 300;
let alto = 510;
let imageData = ctx.createImageData(ancho,alto);
let grad=0;
for (var x = 0; x < ancho; x++) {
  for (var y = 0; y < alto; y++) {
    if(x<ancho/2){
      grad=x/(ancho/2)*255;
      setPixel(imageData,x,y,grad,grad,0,255);
    }else{
      grad=255-(((x-(ancho/2))/(ancho/2))*255);
      setPixel(imageData,x,y,255,grad,0,255)
    }
  }
  grad=0;
};

ctx.putImageData(imageData,10,10);

function setPixel(imageData,x,y,r,g,b,a) {
  index = (x + y * imageData.width) * 4;
  imageData.data[index+0]=r;
  imageData.data[index+1]=g;
  imageData.data[index+2]=b;
  imageData.data[index+3]=a;

};
