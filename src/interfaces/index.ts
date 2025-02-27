class Bird {
  wingSpan: number = 0
  fly() {
    return 'Bird is flying... Flap, flap!'
  }
}

class Duck extends Bird implements CanSwim {
  webbedFeet: boolean = true // Most ducks have webbed feet by default

  quack() {
    return 'Duck is quacking... Quack quack!'
  }

  fly() {
    // Overriding the fly method
    return 'Duck is flying... Flap, flap!'
  }

  swim() {
    if (this.webbedFeet) {
      return 'Duck is swimming efficiently... Splash, splash!'
    }
    return 'Duck is swimming... Splash, splash!'
  }
}

interface CanSwim {
  swim(): string
  webbedFeet: boolean
}

const myDuck = new Duck()
myDuck.wingSpan = 24 // Setting wingspan in inches
myDuck.webbedFeet = true // Setting webbedFeet to true

console.log(
  `My Duck has a wingspan of ${myDuck.wingSpan} and ${
    myDuck.webbedFeet ? 'has webbed feet' : 'does not have webbed feet'
  } 
    and can fly and quack! 🦆 ${myDuck.fly()} ${myDuck.quack()}`
)
