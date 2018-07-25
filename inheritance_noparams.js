//inheritance with function class no parameters

function Brick() {
  this.width = 10;
  this.height = 20;
}

function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}

var b1 = new BlueGlassBrick();
console.log(b1.width + " " + b1.opacity);