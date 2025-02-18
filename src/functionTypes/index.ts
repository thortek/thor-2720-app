import {
  functionParams,
  functionReturnTypesOne,
  functionReturnTypesTwo,
} from '../examples/functionTypes/examples'
import { loadExamples } from '../utils/exampleLoadFuncs'

const examples = [functionParams(), functionReturnTypesOne(), functionReturnTypesTwo()]

let exampleCounter = 0

const leftNavButton = document.querySelector('#leftNavButton')
const rightNavButton = document.querySelector('#rightNavButton')

if (leftNavButton) {
  // figure out if the example counter is greater than 0
  leftNavButton.addEventListener('click', () => {
    if (exampleCounter > 0) {
      exampleCounter--
    } 
    console.log('exampleCounter value is: ', exampleCounter)
    loadExamples([examples[exampleCounter]])
})
}

if (rightNavButton) {
  const examples = [functionReturnTypesOne()]
  rightNavButton.addEventListener('click', () => loadExamples(examples))
}

function getName(): string {
  return 'John Doe'
}

const getNameArrow = (): string => 'John Doe'

function calculateArea(radius: number): number {
  return Math.PI * radius * radius
}

const calculateAreaArrow = (radius: number): number => Math.PI * radius * radius

function logMessage(msg: string): void {
  console.log(msg)
}

const logMessageArrow = (msg: string): void => console.log(msg)
