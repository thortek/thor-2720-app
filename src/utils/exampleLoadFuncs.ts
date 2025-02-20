import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import type { CodeExample } from '../types/CodeExample'

// Then register the languages you need
hljs.registerLanguage('typescript', typescript)

// Be able to load many examples passed in as an array
export function loadExamples(examples: any[]) {
  // get a reference to the example card container
  const container = document.querySelector('#examplesContainer')
  if (!container) {
    console.error('Could not find examples container')
    return
  }

  container.innerHTML = examples
    .map(
      (example) => `
      <div class="card-body flex-grow-0">
  <h2 class="card-title">${example.title}</h2>
  <p>${example.explanation}</p>
  <div>
  <pre class="bg-slate-900 text-slate-200 px-4 rounded-md">
  <code class="text-wrap">${
    hljs.highlight(example.code, {
      language: 'typescript',
    }).value
  }
  </code>
  </pre>
  </div>
  </div>
  `
    )
    .join('')
}

export function loadExample(example: CodeExample) {
  // get a reference to the example card container
  const container = document.querySelector('#examplesContainer')
  if (!container) {
    console.error('Could not find example container')
    return
  }

  //console.log('example is: ', example)

  container.innerHTML = `
      <div class="card-body flex-grow-0">
  <h2 class="card-title">${example.title}</h2>
  <p>${example.explanation}</p>
  <div>
  <pre class="bg-slate-900 text-slate-200 px-4 rounded-md">
  <code class="text-wrap">${
    hljs.highlight(example.code, {
      language: 'typescript',
    }).value
  }
  </code>
  </pre>
  </div>
  </div>
  `
}
