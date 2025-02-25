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

const updateNavButtons = () => {
  if (leftNavButton && rightNavButton) {
    leftNavButton.classList.toggle('hidden', exampleCounter === 0)
  }
  rightNavButton?.classList.toggle('hidden', exampleCounter === examples.length - 1)
}

if (leftNavButton) {
  leftNavButton.addEventListener('click', () => {
    if (exampleCounter > 0) {
      exampleCounter--
      loadExample(examples[exampleCounter])
      updateNavButtons()
      updateDotIndicators()
    } 
  })
}

if (rightNavButton) {
  rightNavButton.addEventListener('click', () => {
    if (exampleCounter < examples.length - 1) {
      exampleCounter++
      loadExample(examples[exampleCounter])
      updateNavButtons()
      updateDotIndicators()
    } 
  })
}

const updateDotIndicators = () => {
  const dots = document.querySelectorAll('.rounded-full')
  dots.forEach((dot, index) => {
    if (index === exampleCounter) {
      dot.classList.remove('bg-gray-300')
      dot.classList.add('bg-primary')
    } else {
      dot.classList.remove('bg-primary')
      dot.classList.add('bg-gray-300')
    }
  })
}

updateNavButtons()
updateDotIndicators()
loadExample(examples[exampleCounter])
