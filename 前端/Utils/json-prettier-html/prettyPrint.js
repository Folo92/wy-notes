const matchHtmlRegExp = /["'&<>]/;

const escapeHtml = (str) => {
  const match = matchHtmlRegExp.exec(str);
  if (match !== null) {
    let escape;
    let html = "";
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34: // "
          escape = "&quot;";
          break;
        case 38: // &
          escape = "&amp;";
          break;
        case 39: // '
          escape = "&#39;";
          break;
        case 60: // <
          escape = "&lt;";
          break;
        case 62: // >
          escape = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escape;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  return str;
};

/**
 * A utility class for printing json artifacts
 */
class PrintWriter {
  buffer;
  indentString;
  objects;

  constructor(indentString) {
    this.buffer = [];
    this.indentString = indentString;
    this.objects = [];
  }

  checkCircular(object) {
    for (const obj of this.objects) {
      if (object === obj) {
        throw new Error("Cannot pretty print object with circular reference");
      }
    }
    this.objects.push(object);
  }

  print(str) {
    // this.buffer.push(`<span class="json-normal">${str}</span>`);
    this.buffer.push(str);
  }

  newLine() {
    this.buffer.push("<br>");
  }

  space() {
    // this.buffer.push(`<span class="json-space">&nbsp;</span>`);
    this.buffer.push("&nbsp;");
  }

  indent(len) {
    if (len > 0) {
      let res = "";
      for (let i = 0; i < len; i++) {
        res += this.indentString;
      }
      // this.buffer.push(`<span class="json-space">${res}</span>`);
      this.buffer.push(res);
    }
  }

  printKey(key) {
    // this.buffer.push('"');
    this.buffer.push(`<span class="json-key">${escapeHtml(key)}</span>`);
    // this.buffer.push('"');
  }

  printString(value) {
    this.buffer.push('"');
    this.buffer.push(`<span class="json-string">${escapeHtml(value)}</span>`);
    this.buffer.push('"');
  }

  printBoolean(value) {
    this.buffer.push(`<span class="json-boolean">${value}</span>`);
  }

  printNumber(value) {
    this.buffer.push(`<span class="json-number">${value}</span>`);
  }

  printSelectionStart() {
    this.buffer.push(`</div>`);
    this.buffer.push(`<div class="json-pretty json-selected">`);
  }

  printSelectionEnd() {
    this.buffer.push(`</div>`);
    this.buffer.push(`<div class="json-pretty">`);
  }

  printCollapseStart() {
    this.buffer.push(`<span class="collapse-block">`);
  }

  printCollapseEnd() {
    this.buffer.push(`</span>`);
  }

  toString() {
    return this.buffer.join("");
  }
}

const selectPrintFn = (value, out, idt, options, selection) => {
  switch (typeof value) {
    case "number":
      out.printNumber(value);
      break;
    case "boolean":
      out.printBoolean(value);
      break;
    case "string":
      out.printString(value);
      break;
    case "object":
      if (value === null) {
        out.print("null");
      } else if (Array.isArray(value)) {
        printArray(value, out, idt + 1, options, selection);
      } else {
        printObject(value, out, idt + 1, options, selection);
      }
      break;
    case "undefined":
      out.print("undefined");
      break;
    default:
      throw new Error(`Unexpected type: ${typeof value}`);
  }
};

const getCollapseItem = (len) => {
  if (len === 0) {
    return "";
  }
  return `...${len} items`;
};

const printObject = (object, out, idt, options, selection) => {
  out.checkCircular(object);
  out.print("{");
  out.print(
    `<span style="display: none; color: grey;">${getCollapseItem(
      Object.keys(object).length
    )}</span>`
  );
  out.print(`<span class="wrapper">`);
  out.newLine();
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = object[key];
    const isSelected = selection === value;
    if (isSelected) {
      out.printSelectionStart();
    }
    out.indent(idt + 1);
    const isObject = typeof value === "object" && value !== null;
    if (isObject) {
      out.printCollapseStart();
    }
    out.printKey(key);
    out.print(":");
    out.space();
    selectPrintFn(value, out, idt, options, selection);
    if (i < keys.length - 1) {
      out.print(",");
    }
    out.newLine();
    if (isSelected) {
      out.printSelectionEnd();
    }
    if (isObject) {
      out.printCollapseEnd();
    }
  }
  out.indent(idt);
  out.print(`</span>`);
  out.print("}");
};

const printArray = (array, out, idt, options, selection) => {
  out.checkCircular(array);
  out.print("[");
  out.print(`<span style="display: none; color: grey;">${getCollapseItem(array.length)}</span>`);
  out.print(`<span class="wrapper">`);
  out.newLine();
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const isSelected = selection && selection === value;
    if (isSelected) {
      out.printSelectionStart();
    }
    out.indent(idt + 1);
    selectPrintFn(value, out, idt, options, selection);
    if (i < array.length - 1) {
      out.print(",");
    }
    out.newLine();
    if (isSelected) {
      out.printSelectionEnd();
    }
  }
  out.indent(idt);
  out.print(`</span>`);
  out.print("]");
};

const prettyPrint = (object, options, selection) => {
  if (typeof object !== undefined && object != null) {
    const opts = { indent: "&nbsp;&nbsp;", ...options };
    const out = new PrintWriter(opts.indent);
    if (object === selection) {
      out.print(`<div class="json-pretty json-selected">`);
    } else {
      out.print(`<div class="json-pretty">`);
    }
    if (Array.isArray(object)) {
      printArray(object, out, 0, opts, selection);
    } else {
      printObject(object, out, 0, opts, selection);
    }
    out.print(`</div>`);
    return out.toString();
  }
  return "";
};

const bindCollapseClick = (parent) => {
  const collapseBlocks = parent.getElementsByClassName("collapse-block");
  Array.from(collapseBlocks).forEach((element) => {
    bindCollapseClick(element); // 递归绑定事件
    element.addEventListener("click", (e) => {
      const childNodes = e.target.childNodes;
      Array.from(childNodes).forEach((node, i) => {
        if (i > 1 && i < childNodes.length - 2) {
          // const eleStyle = getComputedStyle(element, "::before");
          // console.log(element.classList);
          if (node.style) {
            if (node.style.display === "none") {
              node.style.display = "inline";
              // element.style.setProperty("--collapse-deg", "rotate(0)");
              // element.classList.remove("rotate-90");
              // element.classList.add("rotate-0");
            } else {
              node.style.display = "none";
              // element.style.setProperty("--collapse-deg", "rotate(-90deg)");
              // element.classList.remove("rotate-0");
              // element.classList.add("rotate-90");
            }
          }
        }
      });
    });
  });
};

const insertJsonHtml = (container, json) => {
  const jsonHtml = prettyPrint(json, { indent: "&nbsp;&nbsp;" });
  container.innerHTML = jsonHtml;
  console.log(container.innerText);
  bindCollapseClick(container);
};

// const json = {
//   name: "js-school",
//   age: 18,
//   students: ["bob", "marrin", "jack"],
//   test: {
//     a: "s1",
//     b: [null, undefined, 0, ""],
//     c: {},
//   },
// };
// insertJsonHtml(document.querySelector(".json-panel"), json);
