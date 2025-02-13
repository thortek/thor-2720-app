import { functionParams } from "../examples/functionTypes/examples";
import { loadExamples } from "../utils/exampleLoadFuncs";

const leftNavButton = document.querySelector("#leftNavButton")
const rightNavButton = document.querySelector("#rightNavButton")

if (leftNavButton) {
  const examples = [functionParams()]
  leftNavButton.addEventListener("click", () => loadExamples(examples))
}