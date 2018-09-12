let ctx = document.getElementById('canvas').getContext('2d');

let image1 = new Image();
image1.src="tiburon-final.jpg"
let circulo = new Circle();
let circulo2 = new Circle();
let circulo3 = new Circle();
let circulo4 = new Circle();
let circulo5 = new Circle();
let rectangulo = new Rectangle();
let rectangulo2 = new Rectangle();
let triangle = new Triangle();
circulo2.setValues(500,500,40,'#89AC76');
circulo3.setValues(600,600,50,'#89AC76');
circulo4.setValues(600,200,150,'#89AC76');
circulo5.setValues(100,500,100,'#89AC76')
rectangulo2.setValues(100,100,40,40,'#89AC76');
circulo.dibujar();
circulo2.dibujar();
rectangulo.dibujar();
rectangulo2.dibujar();
triangle.dibujar();
image1.onload = function () {
  let image = ctx.createPattern(this , "repeat")
  circulo3.dibujarConImagen(image,ctx);
}
circulo4.dibujarConGradiente();
circulo5.dibujarConGradienteRadial();
