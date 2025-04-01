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

// Add these classes to snippetDisplay in your initialization code
snippetDisplay?.classList.add('overflow-auto', 'h-[calc(100vh-12rem)]');

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
    navList.removeChild(navList.firstChild);
  }
  
  block.challenges.forEach((challenge: any) => {
    const listItem = document.createElement("li");
    //console.log(challenge.title);
    listItem.classList.add("list-row", "text-center", "w-full");
    
    const listDiv = document.createElement("div");
    listDiv.classList.add("btn", "btn-ghost", "h-24", "p-1", "w-full");
    listDiv.textContent = challenge.title;

    listDiv.addEventListener("click", (event) => {
      // Remove active class from all other items
      document.querySelectorAll('#navList li div').forEach(item => {
        item.classList.remove('active', 'bg-primary/10', 'border-r-4', 'border-primary');
      });
      
      // Add active class to clicked item
      listDiv.classList.add('active', 'bg-primary/10', 'border-r-4', 'border-primary');
      
      // Build the snippet display
      buildSnippetDisplay(challenge);
      
      // Align the snippet with the clicked nav item
      alignSnippetWithNavItem(event.target as HTMLElement);
    });

    listItem.appendChild(listDiv);
    navList?.appendChild(listItem);
  });
}

// Function to align snippet with clicked nav item
const alignSnippetWithNavItem = (clickedItem: HTMLElement) => {
  if (!snippetDisplay) return;
  
  // Use scrollTo with smooth behavior instead of directly setting scrollTop
  snippetDisplay.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

};

const buildSnippetDisplay = (challenge: CodeSnippet) => {
  // Clear existing content
  while (snippetDisplay?.firstChild) {
    snippetDisplay.removeChild(snippetDisplay.firstChild);
  }

  // Create card container
  const card = document.createElement('div');
  card.classList.add('card', 'bg-base-100', 'shadow-xl', 'm-4', 'overflow-auto', 
    'max-h-[calc(100vh-12rem)]', 'transition-all', 'duration-300');

  // Create card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // Header section with title
  const header = document.createElement('div');
  header.classList.add('border-b', 'border-base-300', 'pb-4', 'mb-4');

  const title = document.createElement('h2');
  title.textContent = challenge.title;
  title.classList.add('card-title', 'text-2xl', 'font-bold', 'text-center', 'mx-auto');

  // Create badge for challenge type
  const badge = document.createElement('div');
  badge.classList.add('badge', 'badge-primary', 'badge-lg', 'mx-auto', 'mt-2');
  badge.textContent = 'Interface Challenge';

  header.appendChild(title);
  header.appendChild(badge);

  // Description section
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('prose', 'max-w-none', 'mb-6');
  
  const descTitle = document.createElement('h3');
  descTitle.textContent = 'Description';
  descTitle.classList.add('text-xl', 'font-semibold', 'mb-2');
  
  const description = document.createElement('div');
  description.innerHTML = challenge.description as string;
  description.classList.add('text-base-content/80');
  
  descriptionContainer.appendChild(descTitle);
  descriptionContainer.appendChild(description);

  // Instructions section
  const instructionsContainer = document.createElement('div');
  instructionsContainer.classList.add('alert', 'bg-base-200', 'shadow-lg');
  
  const instructionsIcon = document.createElement('div');
  instructionsIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `;
  
  const instructionsContent = document.createElement('div');
  
  const instructionsTitle = document.createElement('h3');
  instructionsTitle.textContent = 'Instructions';
  instructionsTitle.classList.add('font-bold', 'text-lg');
  
  const instructions = document.createElement('div');
  instructions.innerHTML = challenge.instructions as string;
  instructions.classList.add('mt-2');
  
  instructionsContent.appendChild(instructionsTitle);
  instructionsContent.appendChild(instructions);
  
  instructionsContainer.appendChild(instructionsIcon);
  instructionsContainer.appendChild(instructionsContent);

  // Assemble the components
  cardBody.appendChild(header);
  cardBody.appendChild(descriptionContainer);
  cardBody.appendChild(instructionsContainer);
  card.appendChild(cardBody);
  snippetDisplay?.appendChild(card);
}

buildTopNavFromJSON(blocksObj)

// for testing purposes only, load the first block
buildLeftNavFromJSON(basicCSS)









































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
