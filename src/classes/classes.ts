







// Abstraction

abstract class Shape {

  protected color: string = '';

  abstract getArea(): number;

  abstract getPerimeter(): number;

  getColor(): string {
    return this.color;
  }
}

// Inheritance

class Circle extends Shape {
  private radius: number; // private means this property is only accessible within this class

  constructor(radius: number, color: string) {
    super(); // Call the constructor of the parent class
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Polymorphism

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

}

const shapes: Shape[] = [new Circle(5, 'red'), new Rectangle(10, 20, 'blue')];

shapes.forEach(shape => {
  console.log(`Area: ${shape.getArea()}`);
  console.log(`Perimeter: ${shape.getPerimeter()}`);
  console.log(`Color: ${shape.getColor()}`);
});

// Encapsulation

class Person {
  private name: string;
  private age: number;
  occupation: string;

  constructor(name: string, age: number, occupation: string) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.  I'm a ${this.occupation}.`);
  }
}

const alice = new Person('Alice', 30, 'Engineer');
alice.greet();
alice.setName('Alice Smith');
alice.greet();
const bob = new Person('Bob', 25, 'Designer');
bob.greet();

