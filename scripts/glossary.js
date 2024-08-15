const startGlossary = performance.now(); // start time for execution time

let glossary = document.getElementsByClassName("glossary-word-def");
let glossaryStrings = [];

// get the words from my glossary definitions to search for them later
for (let i=0; i<glossary.length; i++) {
    let word = glossary[i].outerText;
    word = word.substring(0, word.length - 1);
    glossaryStrings.push(word); 
}
console.log(glossaryStrings);

function isGlossaryWord(elem, word) {
    let text = elem.wholeText;
    console.log(word, "\n", text);
    return text.match(word) !== null;
}

function spanAroundString(elem, string) {
    // Using a more precise method to replace text nodes only
    const regex = new RegExp(`\\b${string}\\b`, 'g');
    elem.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const matches = node.textContent.match(regex);
            if (matches) {
                const replacement = document.createElement('span');
                replacement.innerHTML = node.textContent.replace(
                    regex,
                    `<a href='#glossary' class='glossary-word'>${string}</a>`
                );
                node.parentNode.replaceChild(replacement, node);
            }
        }
    });
}

let queue = [document.body], curr;

while (curr = queue.pop()) {

    for (let j = 0; j < curr.childNodes.length; ++j) {
        let child = curr.childNodes[j];
        switch (child.nodeType) {
            case Node.TEXT_NODE:
                for (let i = 0; i < glossaryStrings.length; i++) {
                    let word = glossaryStrings[i];
                    if (isGlossaryWord(child, word)) {
                        spanAroundString(curr, word);
                        console.log("#".repeat(75)+" FOUND! "+"#".repeat(75));
                    }
                }
                break;
            case Node.ELEMENT_NODE:
                queue.push(child);
                break;
        }
    }
}


const endGlossary = performance.now(); // end timer for execution time
console.info(`glossary.js execution time: ${endGlossary - startGlossary} ms`);
