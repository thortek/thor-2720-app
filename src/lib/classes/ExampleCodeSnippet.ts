import { CodeExample } from "../../types/CodeExample"

  /**
   * A class representing an example code snippet.
   * @param title - The title of the code snippet.
   * @param explanation - A brief explanation of the code snippet.
   * @param code - The actual code snippet.
   */

export class ExampleCodeSnippet implements CodeExample {

  constructor(
    public title: string,
    public explanation: string,
    public code: string
  ) {}
  renderCodeSnippet(): string {
    return `
      <div class="space-y-4">
        <h3 class="text-2xl">
        ${this.title}
        </h3>
        <p class="text-gray-700">
        ${this.explanation}
        </p>
        <pre class="bg-gray-100 p-4 rounded-lg">
        <code class="language-typescript">
        ${this.code}
        </code>
        </pre>
      </div>`
  }
}