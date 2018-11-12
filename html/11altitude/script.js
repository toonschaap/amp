const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(300,400,15,"red");
let B = new Point(800,400,15,"blue");
let C = new Point(600,200,15,"yellow");
let D = new Point(600,200,15,"white");
let E = new Point(600,200,15,"white");
let F = new Point(600,200,15,"white");
let G = new Point(600,200,15,"white");


let f = new LinearFunction(10,100);
let m = new LinearFunction(10,200);
let e = new LinearFunction(10,300);
let q = new LinearFunction(10,400);
let le = new LinearFunction(1,1);
let lf = new LinearFunction(1,1);
let lm = new LinearFunction(1,1);




A.drag();
B.drag();
C.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.letTwoPointsDefineLine(A,B);
  m.letTwoPointsDefineLine(A,C);
  e.letTwoPointsDefineLine(C,B);


  // D.y = (A. + B. + C.) / ;
  // D.x = (A.x + B.x + C.x) / 3;
/*  D.x=(A.x + B.x)/2;
  D.y=(A.y + B.y)/2;

  E.x=(A.x + C.x)/2;
  E.y=(A.y + C.y)/2;

  F.x=(B.x + C.x)/2;
  F.y=(B.y + C.y)/2;

  S.x = (D.x + E.x + F.x) / 3;
  S.y = (D.y + E.y + F.y) / 3;
  */
  le.slope = -1/e.slope;
  le.intercept = A.y - le.slope * A.x;
  D.x = e.intersection(le).x;
  D.y = e.intersection(le).y;

  lf.slope = -1/f.slope;
  lf.intercept = C.y - lf.slope * C.x;
  E.x = f.intersection(lf).x;
  E.y = f.intersection(lf).y;

  lm.slope = -1/m.slope;
  lm.intercept = B.y - lm.slope * B.x;
  F.x = m.intersection(lm).x;
  F.y = m.intersection(lm).y;

  G.x = le.intersection(lf).x;
  G.y = le.intersection(lf).y;

  f.draw(context);
  m.draw(context);
  e.draw(context);
  le.draw(context, "grey");
  lf.draw(context, "grey");
  lm.draw(context, "grey");


  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);
  G.draw(context);

  B.print(context,"Move me, baby")
}

animate();
