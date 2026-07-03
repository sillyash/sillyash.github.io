const startGlossary = performance.now() // start time for execution time

const glossary = document.getElementsByClassName('glossary-word-def')
const glossaryStrings = []

// get the words from my glossary definitions to search for them later
for (let i = 0; i < glossary.length; i++) {
  let word = glossary[i].outerText
  word = word.substring(0, word.length - 1)
  glossaryStrings.push(word)
}
console.log('Glossary', glossaryStrings)

function isGlossaryWord (elem, word) {
  const text = elem.wholeText
  return text.match(word) !== null
}

function AnchorAroundString (curr, word) {
  // Define a regular expression pattern that matches the word with word boundaries and possible punctuation
  const pattern = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g')

  // Define the replacement anchor tag
  const replacement = `<a href="#glossary" class="glossary-word">${word}</a>`

  // Replace all case-sensitive occurrences of the word with the anchor tag
  const result = curr.innerHTML.replace(pattern, replacement)
  curr.innerHTML = result
}

const queue = [document.body]; let curr

while ((curr = queue.pop())) {
  for (let j = 0; j < curr.childNodes.length; ++j) {
    const child = curr.childNodes[j]
    switch (child.nodeType) {
      case Node.TEXT_NODE:
        for (let i = 0; i < glossaryStrings.length; i++) {
          const word = glossaryStrings[i]
          if (isGlossaryWord(child, word)) {
            AnchorAroundString(curr, word)
          }
        }
        break
      case Node.ELEMENT_NODE:
        queue.push(child)
        break
    }
  }
}

const glossaryDefs = document.getElementsByClassName('glossary-word-def')
console.log(glossaryDefs)
// remove the glossary-word elements glossary definitions
// and readd the words in the correct span
for (let i = 0; i < glossary.length; i++) {
  const defWord = glossary[i]

  const word = glossaryStrings[i]
  defWord.innerHTML = word
}

const endGlossary = performance.now() // end timer for execution time
console.info(`glossary.js execution time: ${endGlossary - startGlossary} ms`)
