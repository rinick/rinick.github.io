import {EditorState} from "@codemirror/state";
import {EditorView, lineNumbers} from "@codemirror/view";
import {basicSetup} from "@codemirror/basic-setup";

const ruleInput = document.querySelector("#pi-rule-input");

let rules = [
  [10,10]
];
let lastRule = rules.at(-1);
let total = 10000;
let start = 0;

let preRows = [];
let preRowSum = 0;
let perRow = 20;


const customLineNumbers = lineNumbers({
  // Use the correct option name so custom labels persist across updates
  formatNumber: (lineNo) => {
    let offsetLine = lineNo - 1;

    if (start === 0) {
      offsetLine -= 1;
      if (offsetLine < 0) {
        return '';
      }
    }
    if (preRows.length > offsetLine) {
      return String(preRows[offsetLine] + start);
    }
    return String((offsetLine - preRows.length) * perRow + preRowSum + start);
  }
});


const state = EditorState.create({
  doc: '',
  extensions: [
    basicSetup, 
    EditorState.readOnly.of(true),
    customLineNumbers, 
    // DigitColorizer, 
]
});

const editorElement = document.querySelector("#cm-editor");
editorElement.style.height = `${document.documentElement.scrollHeight - 400}px`;


const view = new EditorView({
  state,
  parent: editorElement
});

function parseInt(str) {
    const num = Number.parseInt(str);
    if (isNaN(num)) {
        throw new Error("Invalid number");
    }
    return num;
}
function parseRule(str) {
    try {
        start = 0;
        total = 10000;
        preRowSum = 0;
        perRow = 20;
        preRows = [];
        let parts = str.split('|');
        let newRules = [];
        for (let part of parts) {
            if (part.includes('/')) {
                const [s, t] = part.split('/').map(parseInt);
                if (s >= 0 && s < t && t <= 100000) {
                    start = s;
                    total = t;
                }
            } else {
                let rule = part.trim().split(' ').map(parseInt);
                let rowSum = rule.reduce((a, b) => a + b, 0);
                if (rowSum > 0) {
                  newRules.push(rule);
                  preRows.push(preRowSum);
                  preRowSum += rowSum;
                }
            }
        }
        if (newRules.length > 0) {
            rules = newRules;
            lastRule = rules.at(-1);
            perRow = lastRule.reduce((a, b) => a + b, 0);
            preRowSum -= perRow; // remove last row sum
            preRows.pop();
        }
        return true;
    } catch (e) {
        console.error("Error parsing rule:", e);
    }
    return false;
}

if (window.localStorage.getItem("pi-rules")) {
  const savedRules = window.localStorage.getItem("pi-rules")
  if (parseRule(savedRules)) {
    ruleInput.value = savedRules;
  }
} else {
  ruleInput.value = '10 10';
}

function updateText() {
    const strs = [];
    if (start === 0) {
        strs.push("3.\n");
    }
    let current = start;
    for (let i = 0;; i++) {
        let rule = rules[i] ?? lastRule
        for (let step of rule) {
            strs.push(piData.substring(current, current + step));
            current += step;
            strs.push(' ');
        }
        strs[strs.length - 1] = '\n'; // replace last space with newline
        if (current >= total) {
          break;
        }
    }
    strs.pop();
    view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: strs.join('')}
    });
}

updateText();

ruleInput.onkeydown = (event) => {
  if (event.key === "Enter") {
      if (parseRule(ruleInput.value)) {
          window.localStorage.setItem("pi-rules", ruleInput.value);
          updateText();
      }
      event.preventDefault();
  }
};

