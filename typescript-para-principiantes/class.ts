class Shape {
  area: number;
  color?: string;

  constructor(public name: string, width: number, height: number) {
    this.area = width * height;
    this.color = "Pink";
  }

  shoutout() {
    return "I'm a " + this.color + " " + this.name + " with a area of " + this.area + " cm squared.";
  }
}

class Shape3D extends Shape {
  volume: number;

  constructor ( public name: string, width: number, height: number, length: number ) {
    super( name, width, height );
    this.volume = length * this.area;
  };

  shoutout() {
    return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
  }
  
  superShout() {
    return super.shoutout();
  }
}

const cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );