const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dragPoint = new Point(200,200,20,"red");
dragPoint.draw(context);
dragPoint.drag();

let otherDragPoint = new Point(300,100,20,"blue");
otherDragPoint.drag();

let anOtherOtherPoint = new Point(800,400,20,"yellow");
anOtherOtherPoint.drag();

let yetanOtherOtherPoint = new Point(300,300,20,"green");
yetanOtherOtherPoint.draw(context);

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.beginPath();
  context.moveTo(dragPoint.x,dragPoint.y);
  context.lineTo(otherDragPoint.x,otherDragPoint.y);
  context.lineTo(anOtherOtherPoint.x,anOtherOtherPoint.y);
  context.closePath();
  context.stroke();

  dragPoint.draw(context);
  otherDragPoint.draw(context);
  anOtherOtherPoint.draw(context);
}

animate();
