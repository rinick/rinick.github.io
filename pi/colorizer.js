import {RangeSetBuilder} from "@codemirror/state";
import { ecoration, ViewPlugin} from "@codemirror/view";

// 1) Map digit code → class name
const classForDigit = cp => "c-" + cp;

// 2) Build decorations only for digits
function buildDecos(view) {
  const builder = new RangeSetBuilder();
  for (const {from, to} of view.visibleRanges) {
    let iter = view.state.doc.iterRange(from, to);
    let pos = from;
    while (!iter.next().done) {
      const chunk = iter.value;
      for (let i = 0; i < chunk.length; i++) {
        const ch = chunk.codePointAt(i);
        if (ch >= 48 && ch <= 57) { // '0'..'9'
          builder.add(pos, pos + 1, Decoration.mark({class: classForDigit(ch)}));
        }
        pos++;
      }
    }
  }
  return builder.finish();
}

// 3) Inject CSS: 10 classes for '0'..'9'
const styleEl = document.createElement("style");
styleEl.textContent = `
  .cm-editor { font: 16px monospace; }
  .c-48 { color: #333 } /* '0' */
  .c-49 { color: #c50 } /* '1' */
  .c-50 { color: #0c8 } /* '2' */
  .c-51 { color: #d11 } /* '3' */
  .c-52 { color: #06a } /* '4' */
  .c-53 { color: #970 } /* '5' */
  .c-54 { color: #22e } /* '6' */
  .c-55 { color: #d0c } /* '7' */
  .c-56 { color: #480 } /* '8' */
  .c-57 { color: #70b } /* '9' */
`;
document.head.appendChild(styleEl);

// 4) Plugin to update decorations
export const DigitColorizer = ViewPlugin.fromClass(class {
  constructor(view) { this.decos = buildDecos(view); }
  update(u) {
    if (u.docChanged || u.viewportChanged) {
      this.decos = buildDecos(u.view);
    }
  }
}, { decorations: v => v.decos });
