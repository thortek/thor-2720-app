import { ExampleCodeSnippet } from "../lib/classes/ExampleCodeSnippet";

const section1 = document.querySelector("#section1")
const section2 = document.querySelector("#section2")
const section3 = document.querySelector("#section3")

const example1 = document.querySelector("#example1")
const example2 = document.querySelector("#example2")
const example3 = document.querySelector("#example3")

const observerOptions = {
  root: null,
  threshold: 0.25,
  rootMargin: '-50px'
}

const sectionObserver = new IntersectionObserver(callBackFunction, observerOptions)

if (section1) sectionObserver.observe(section1)
if (section2) sectionObserver.observe(section2)
if (section3) sectionObserver.observe(section3)

  function callBackFunction(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    const div = entry.target.querySelector('div')
    const targetClass = (entry.target as HTMLElement).dataset.class
    console.log('Target class:', targetClass)

    if (entry.isIntersecting) {
      console.log('Intersecting:' )
      div?.classList.remove(targetClass ?? '', "opacity-0")
    } else {
      console.log('Not intersecting:')
      div?.classList.add(targetClass ?? '', "opacity-0")
    }
  })
}

const classExample = new ExampleCodeSnippet(`Class Example`, `A class is a blueprint for creating objects...`,
  `class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }`
)

if (example1) example1.innerHTML = classExample.renderCodeSnippet()



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

