const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let cock = new Image();
cock.src = "cock1.png";
cock.rotation = 0;
cock.rotation2 = 5.5;
cock.rotation3 = 5.5;


cock.addEventListener('load',()=>{
animate();

})

function animate(){
  context.clearRect(-150,-150,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.save();
  context.translate(420,300);
  context.rotate(cock.rotation);
  context.drawImage(cock,-0.5*cock.width,-0.5*cock.height);
  context.restore();

  context.save();
  context.translate(690,300);
  context.rotate(-cock.rotation2);
  context.drawImage(cock,-0.5*cock.width,-0.5*cock.height)
  context.restore();

  context.save();
  context.translate(150,300);
  context.rotate(-cock.rotation3);
  context.drawImage(cock,-0.5*cock.width,-0.5*cock.height)
  context.restore();
  cock.rotation += -0.01;
  cock.rotation2 += -0.01;
  cock.rotation3 += -0.01;
}
