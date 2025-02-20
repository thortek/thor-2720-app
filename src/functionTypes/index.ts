import {
  functionParams,
  functionReturnTypesOne,
  functionReturnTypesTwo,
} from '../examples/functionTypes/examples'
import { loadExamples, loadExample } from '../utils/exampleLoadFuncs'
import type { CodeExample } from '../types/CodeExample'

const examples: CodeExample[] = [
  functionParams(),
  functionReturnTypesOne(),
  functionReturnTypesTwo(),
]

let exampleCounter = 0

const leftNavButton = document.querySelector('#leftNavButton')
const rightNavButton = document.querySelector('#rightNavButton')

if (leftNavButton) {
  if (exampleCounter === 0) {
    leftNavButton.classList.toggle('hidden')
  }

  // figure out if the example counter is greater than 0
  leftNavButton.addEventListener('click', () => {
    if (exampleCounter > 0) {
      exampleCounter--
    } // else if exampleCounter is equal to 0, hide the leftNavButton
    // if (exampleCounter === 0) {
    //   leftNavButton.classList.add('hidden')
    // }
    console.log(
      'Left Nav exampleCounter value is decremented to: ',
      exampleCounter
    )
    loadExample(examples[exampleCounter])
  })
}

if (rightNavButton) {
  if (exampleCounter === examples.length - 1) {
    rightNavButton.classList.add('hidden')
  } 

  rightNavButton.addEventListener('click', () => {
    if (exampleCounter < examples.length - 1) {
      exampleCounter++
    } // else if exampleCounter is equal to the length of the examples array - 1, hide the rightNavButton

    loadExample(examples[exampleCounter])
  })
}

loadExample(examples[exampleCounter])

/* function getName(): string {
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

const logMessageArrow = (msg: string): void => console.log(msg) */
