import curriculum from '../data/curriculum.json'
import { CodeSnippet } from '../types/CodeSnippet'

const blocks = curriculum["responsive-web-design"].blocks

const blocksObj= Object.values(blocks)

// this is an example of destructuring an object into an array
const [basicCSS, basicHTML, flexbox, grid] = blocksObj

// example of destructuring an object into its keys
const { meta, challenges } = basicCSS

const navBarCenter = document.querySelector(".navbar #navBarCenter")
const navList = document.querySelector("#navList")
const snippetDisplay = document.querySelector("#snippetDisplay")

const buildTopNavFromJSON = (blocksArray: any) => {
  blocksArray.forEach((block: any) => {
    //console.log(block.meta.name)
    const navItem = document.createElement("a")
    navItem.classList.add("btn")
    navItem.href = `#${block.meta.name}`
    navItem.textContent = block.meta.name

    navItem.addEventListener("click", (event: any) => {
      // find the block that matches the navItem that was clicked
      //console.log(event.target.textContent)
      const blockToDisplay = blocksArray.find((block: any) => block.meta.name === event.target.textContent)
      //console.log(blockToDisplay)
      buildLeftNavFromJSON(blockToDisplay)
    })

    navBarCenter?.appendChild(navItem)
  })
}

const buildLeftNavFromJSON = (block: any) => {
  // empty the left nav before adding new items
  while (navList?.firstChild) {
    navList.removeChild(navList.firstChild)
  }
  
  block.challenges.forEach((challenge: any) => {
    const listItem = document.createElement("li")
    console.log(challenge.title)
    //listItem.textContent = challenge.title
    listItem.classList.add("list-row")
    const listDiv = document.createElement("div")
    listDiv.classList.add("btn", "btn-ghost")
    listDiv.textContent = challenge.title

    listDiv.addEventListener("click", (event: any) => {
      buildSnippetDisplay(challenge)
    })

    listItem.appendChild(listDiv)
    navList?.appendChild(listItem)
  })
}

const buildSnippetDisplay = (challenge: CodeSnippet) => {
  // make some DOM elements to display the challenge
  while (snippetDisplay?.firstChild) {
    snippetDisplay.removeChild(snippetDisplay.firstChild)
  }

  const title = document.createElement('h2')
  title.textContent = challenge.title
  title.classList.add('text-2xl', 'font-bold', 'text-center')

  const description = document.createElement('div')
  description.innerHTML = challenge.description as string

  const instructions = document.createElement('div')
  instructions.innerHTML = challenge.instructions as string
  instructions.classList.add('bg-blue-900')
  
  snippetDisplay?.appendChild(title)
  snippetDisplay?.appendChild(description)
  snippetDisplay?.appendChild(instructions)
}

buildTopNavFromJSON(blocksObj)









































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
