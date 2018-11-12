const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(300,400,15,"red");
let B = new Point(800,400,15,"blue");
let C = new Point(600,200,15,"yellow");
let D = new Point(300,300,15,"green");
let E = new Point(300,300,15,"orange");
let F = new Point(300,300,15,"purple");
let S = new Point(0,0,10,"white");

let f = new LinearFunction(10,100);
let m = new LinearFunction(10,200);
let e = new LinearFunction(10,300);

let q = new LinearFunction(10,400);
let w = new LinearFunction(10,400);
let r = new LinearFunction(10,400);


A.drag();
B.drag();
C.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.letTwoPointsDefineLine(A,B);
  m.letTwoPointsDefineLine(A,C);
  e.letTwoPointsDefineLine(C,B);
  q.letTwoPointsDefineLine(D,C);
  w.letTwoPointsDefineLine(E,B);
  r.letTwoPointsDefineLine(F,A);



  D.x=(A.x + B.x)/2;
  D.y=(A.y + B.y)/2;

  E.x=(A.x + C.x)/2;
  E.y=(A.y + C.y)/2;

  F.x=(B.x + C.x)/2;
  F.y=(B.y + C.y)/2;

  S.x = (D.x + E.x + F.x) / 3;
  S.y = (D.y + E.y + F.y) / 3;

  f.draw(context);
  m.draw(context);
  e.draw(context);
  q.draw(context,"grey");
  w.draw(context,"grey");
  r.draw(context,"grey");

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);
  S.draw(context);

}

animate();
