function setup() {
  createCanvas(500, 500);
  cars = [];
  
  addX = 5;
  
  cars.push( new Car(0, 200)) ;
}

function draw() {
  background(0);
  fill("gray");
  rect(0, 0, 500, 100);
  fill("gray");
  rect(0, 250, 500, 50);
  fill("gray");
  rect(0, 450, 500, 50);
  for (
    let carsShown = 0;
    carsShown < cars.length;
    carsShown++
  ) {
    cars[carsShown].show();
  
    cars[carsShown].update();
  }
  addFrog(frog);
}

frog = {
  x: 50,
  y: 50,
  fill: "lightgreen",
};

function addFrog(frog) {
  push();
  translate(frog.x, frog.y);
  fill(frog.fill);
  rect(150, 400, 50, 50);
  pop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    frog.y = frog.y - 50;
  } else if (keyCode === DOWN_ARROW) {
    frog.y = frog.y + 50;
  } else if (keyCode === RIGHT_ARROW) {
    frog.x = frog.x + 50;
  } else if (keyCode === LEFT_ARROW) {
    frog.x = frog.x - 50;
  }
}

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  update() {
    this.x = this.x + this.addX;
    this.y = this.y;
    // Reverse if it hits a wall.
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
    }
  }
  show() {
    push();
    translate(this.x, this.y);

    fill("white");
    rect(50, 50, 50, 50);
    pop();
  }
}
