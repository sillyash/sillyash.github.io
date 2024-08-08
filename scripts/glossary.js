const start = performance.now(); // start time for execution time

let glossary = document.getElementsByClassName("glossary-word-def");
let glossaryStrings = [];

// get the words from my glossary definitions to search for them later
for (let i=0; i<glossary.length; i++) {
    glossaryStrings.push(glossary[i].outerText);
}
console.log(glossaryStrings);

function isGlossaryDefinition(elem) {
    return typeof elem.classList !== 'undefined' && elem.classList.contains("glossary-word-def");
}

function isGlossaryWord(elem, word) {
    return elem.textContent.includes(word) && !isGlossaryDefinition(elem);
}

function spanAroundString(elem, string) {
    // Using a more precise method to replace text nodes only
    const regex = new RegExp(`\\b${string}\\b`, 'g');
    elem.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const matches = node.textContent.match(regex);
            if (matches) {
                const replacement = document.createElement('span');
                replacement.innerHTML = node.textContent.replace(regex, `<a href='#glossary' class='glossary-word'>${string}</a>`);
                node.parentNode.replaceChild(replacement, node);
            }
        }
    });
}

for (let i = 0; i < glossaryStrings.length; i++) {
    let word = glossaryStrings[i],
        queue = [document.body],
        curr;

    while (curr = queue.pop()) {
        if (!curr.textContent.match(word)) continue;

        for (let j = 0; j < curr.childNodes.length; ++j) {
            let child = curr.childNodes[j];
            switch (child.nodeType) {
                case Node.TEXT_NODE:
                    if (isGlossaryWord(child, word)) {
                        spanAroundString(curr, word);
                    }
                    break;
                case Node.ELEMENT_NODE:
                    queue.push(child);
                    break;
            }
        }
    }
}


const end = performance.now(); // end timer for execution time
console.log(`Execution time: ${end - start} ms`);
