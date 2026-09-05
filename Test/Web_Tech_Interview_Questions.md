# 🎯 Web Technologies Comprehensive Interview Questions & Answers

A curated collection of interview-level questions, output-prediction puzzles, real-world scenario challenges, and deep-dive technical explanations based on topics covered in this repository: **HTML5**, **CSS3**, and **Core JavaScript**.

---

## 📑 Table of Contents

1. [HTML5 Core & Semantic Markup](#1-html5-core--semantic-markup)
2. [HTML Forms, Tables & Multimedia](#2-html-forms-tables--multimedia)
3. [CSS Core, Selectors & Specificity](#3-css-core-selectors--specificity)
4. [CSS Box Model, Layouts & Positioning](#4-css-box-model-layouts--positioning)
5. [CSS Flexbox, Grid, Animations & Responsive Design](#5-css-flexbox-grid-animations--responsive-design)
6. [JavaScript Variables, Scopes & Hoisting](#6-javascript-variables-scopes--hoisting)
7. [JavaScript Data Types, Operators & Coercion](#7-javascript-data-types-operators--coercion)
8. [JavaScript Functions, Closures & `this` Keyword](#8-javascript-functions-closures--this-keyword)
9. [JavaScript Output Prediction & Code Puzzles](#9-javascript-output-prediction--code-puzzles)
10. [Real-World Scenario-Based Technical Questions](#10-real-world-scenario-based-technical-questions)

---

## 1. HTML5 Core & Semantic Markup

### Q1. What is the difference between HTML and HTML5? What are the key features introduced in HTML5?
<details>
<summary><b>View Answer</b></summary>

- **Doctype**: HTML5 simplified doctype to `<!DOCTYPE html>` compared to lengthy SGML-based doctypes in HTML4.
- **Semantic Elements**: Introduction of `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<main>`, `<aside>`, and `<figure>`.
- **Native Multimedia**: `<audio>` and `<video>` tags without requiring third-party plugins like Flash.
- **Graphics**: `<canvas>` for 2D/raster graphics and native `<svg>` support for vector graphics.
- **Client-side Storage**: `localStorage`, `sessionStorage`, and `IndexedDB` replacing cookie limitations.
- **Form Controls**: New input types (`date`, `color`, `range`, `email`, `tel`, `number`) and validation attributes (`required`, `pattern`).
</details>

---

### Q2. Why is Semantic HTML critical for modern web development?
<details>
<summary><b>View Answer</b></summary>

1. **Accessibility (a11y)**: Screen readers and assistive technologies use semantic tags to provide meaningful navigation landmarks for visually impaired users.
2. **SEO (Search Engine Optimization)**: Search engine crawlers (Googlebot) parse page hierarchy and give higher ranking weights to correctly categorized content (e.g., `<article>` vs generic `<div>`).
3. **Maintainability & Readability**: Developers can easily understand page structure at a glance without deciphering nested `<div>` "soup".
4. **Standard Browser Defaults**: Built-in keyboard accessibility and outline focus states.
</details>

---

### Q3. Explain the difference between `<b>` vs `<strong>` and `<i>` vs `<em>`.
<details>
<summary><b>View Answer</b></summary>

- **`<b>` vs `<strong>`**:
  - `<b>` is **purely visual/presentational** (renders text in bold without adding semantic importance).
  - `<strong>` carries **semantic importance/urgency**, read with emphasis by screen readers.
- **`<i>` vs `<em>`**:
  - `<i>` renders text in italic for typographical reasons (e.g., technical terms, foreign words, ship names).
  - `<em>` indicates **stress emphasis**, altering the pronunciation and meaning of a sentence.
</details>

---

### Q4. What is the difference between relative, absolute, and bookmark hyperlinks?
<details>
<summary><b>View Answer</b></summary>

- **Absolute URL**: Points to a full web address including the protocol and domain (e.g., `https://google.com`).
- **Relative URL**: Points to a file path relative to the current file location within the same domain (e.g., `../pages/about.html` or `/images/logo.png`).
- **Bookmark / Anchor Link**: Links to a specific element on the same or another page using the `#id` fragment identifier (e.g., `<a href="#contact-section">Go to Contact</a>`).
</details>

---

## 2. HTML Forms, Tables & Multimedia

### Q5. What is the purpose of `<fieldset>` and `<legend>` tags in forms?
<details>
<summary><b>View Answer</b></summary>

- **`<fieldset>`**: Groups related input elements and labels together visually and semantically inside a form.
- **`<legend>`**: Provides a caption/title for the group defined by the `<fieldset>`, ensuring screen readers announce the context of the group when focus moves inside.
</details>

---

### Q6. How do `GET` and `POST` methods differ in HTML Form submissions?
<details>
<summary><b>View Answer</b></summary>

| Feature                     | GET | POST |
| :---                        | :--- | :--- |
| **Data Payload Location**   | Appended to URL as query string (`?key=val`) |  Included in HTTP Request Body |
| **Security**                | Insecure for passwords/sensitive info (visible in URL/logs) | Secure against URL exposure (requires HTTPS for encryption) |
| **Data Length**             | Limited by browser URL length (~2048 chars) | Unlimited data payloads (file uploads allowed) |
| **Idempotency / Caching**   | Idempotent, safe, and cacheable by browsers | Non-idempotent, changes server state, not cached |
| **Bookmarking**             | URLs can be bookmarked with query parameters | Cannot be bookmarked directly |
</details> 

---

### Q7. Explain `rowspan` and `colspan` attributes in HTML Tables with an example.
<details>
<summary><b>View Answer</b></summary>

- **`colspan="N"`**: Merges $N$ consecutive columns horizontally across the same row.
- **`rowspan="N"`**: Merges $N$ consecutive rows vertically down the same column.

```html
<table border="1">
  <tr>
    <th colspan="2">Student Details</th> <!-- Spans 2 columns -->
  </tr>
  <tr>
    <td rowspan="2">Alice</td> <!-- Spans 2 rows -->
    <td>Maths - 95</td>
  </tr>
  <tr>
    <td>Physics - 90</td>
  </tr>
</table>
```
</details>

---

### Q8. What are the key differences between embedding an image via `<img>`, `<iframe>`, and `<video>`/`<audio>`?
<details>
<summary><b>View Answer</b></summary>

- **`<img>`**: Void element embedding raster or vector images; supports `alt`, `loading="lazy"`, `srcset`.
- **`<iframe>`**: Embeds an independent nested browsing context (external web page, Google Map, YouTube player) with separate DOM and security sandbox.
- **`<video>` / `<audio>`**: Native media players with built-in controls (`controls`), autoplay restrictions, looping, and fallback `<source>` tracks.
</details>

---

## 3. CSS Core, Selectors & Specificity

### Q9. How does CSS Specificity work, and how is it calculated?
<details>
<summary><b>View Answer</b></summary>

Specificity determines which CSS rule is applied when multiple conflicting selectors target the same element. It is calculated using a 4-part weight system `(a, b, c, d)`:

1. **`a` (Inline styles)**: `style="..."` attribute (Weight: **1000**)
2. **`b` (IDs)**: `#header`, `#nav` (Weight: **100**)
3. **`c` (Classes, Attributes, Pseudo-classes)**: `.btn`, `[type="text"]`, `:hover` (Weight: **10**)
4. **`d` (Elements, Pseudo-elements)**: `div`, `p`, `::before`, `::after` (Weight: **1**)

> **Universal Selector (`*`)** and Combinators (`+`, `>`, `~`) contribute **0** specificity.  
> `!important` overrides normal specificity cascading regardless of selector strength.
</details>

---

### Q10. Explain the 4 types of CSS Combinators with syntax.
<details>
<summary><b>View Answer</b></summary>

1. **Descendant Selector (` ` - space)**: Matches all descendants nested at any depth.
   ```css
   div p { color: blue; } /* All <p> inside <div> */
   ```
2. **Child Selector (`>`)**: Matches only direct children.
   ```css
   div > p { color: red; } /* Only immediate child <p> of <div> */
   ```
3. **Adjacent Sibling Selector (`+`)**: Matches the element placed immediately after the specified element.
   ```css
   h1 + p { font-weight: bold; } /* Only <p> immediately following <h1> */
   ```
4. **General Sibling Selector (`~`)**: Matches all sibling elements following the specified element sharing the same parent.
   ```css
   h1 ~ p { color: gray; } /* All sibling <p> elements after <h1> */
   ```
</details>

---

### Q11. What is the difference between Pseudo-classes (`:`) and Pseudo-elements (`::`)?
<details>
<summary><b>View Answer</b></summary>

- **Pseudo-classes (`:`)**: Target elements based on their **state** or position in the DOM hierarchy (e.g., `:hover`, `:focus`, `:active`, `:first-child`, `:nth-child(2n)`).
- **Pseudo-elements (`::`)**: Style specific **virtual parts** of an element or insert generated content without extra HTML markup (e.g., `::before`, `::after`, `::first-letter`, `::placeholder`).
</details>

---

## 4. CSS Box Model, Layouts & Positioning

### Q12. Explain the CSS Box Model and the difference between `content-box` and `border-box`.
<details>
<summary><b>View Answer</b></summary>

Every HTML element is treated as a rectangular box consisting of:
1. **Content**: Text or images.
2. **Padding**: Transparent space inside the border around the content.
3. **Border**: The stroke line enclosing padding and content.
4. **Margin**: Transparent space outside the border separating neighboring elements.

#### `box-sizing: content-box` (Default)
- `Total Width = width + padding-left + padding-right + border-left + border-right`
- Specifying `width: 200px` with `padding: 20px` results in an element rendered `240px` wide.

#### `box-sizing: border-box` (Best Practice)
- `Total Width = width` (Padding and border are absorbed inward without changing declared dimensions).
- Ideal for responsive layouts: `* { box-sizing: border-box; }`.
</details>

---

### Q13. What is Margin Collapsing and when does it occur?
<details>
<summary><b>View Answer</b></summary>

Margin collapsing occurs when top and bottom margins of adjoining block-level elements combine into a single margin equal to the maximum of the two margins, rather than their sum.

**Common Scenarios:**
1. **Adjacent siblings**: Bottom margin of top element collapses with top margin of bottom element.
2. **Parent and first/last child**: Parent margin collapses with child margin if there is no border, padding, or inline content separating them.
3. **Empty blocks**: Top and bottom margin of an element with no height or content collapse together.

> **Note**: Margins do **not** collapse on `flex`, `grid`, `inline-block`, or `position: absolute` elements.
</details>

---

### Q14. Compare CSS Positioning properties: `static`, `relative`, `absolute`, `fixed`, and `sticky`.
<details>
<summary><b>View Answer</b></summary>

- **`static`** (Default): Follows normal document flow. `top`, `left`, `right`, `bottom`, and `z-index` have no effect.
- **`relative`**: Positioned relative to its normal position. Leaves its original footprint in the document layout; offsets shift visual appearance.
- **`absolute`**: Removed from normal flow. Positioned relative to the closest ancestor with a position other than `static` (or the viewport if none exists).
- **`fixed`**: Removed from normal flow. Positioned relative to the browser viewport; stays fixed during scrolling.
- **`sticky`**: Hybrid between `relative` and `fixed`. Treated as relative until it crosses a specified scroll threshold, then "sticks" to the viewport within its parent container.
</details>

---

### Q15. What are the differences between `display: none` and `visibility: hidden`?
<details>
<summary><b>View Answer</b></summary>

| Property | `display: none` | `visibility: hidden` |
| :--- | :--- | :--- |
| **DOM Tree** | Remains in DOM | Remains in DOM |
| **Layout Space** | Completely removed; takes up zero space | Invisible, but reserves its physical space |
| **Reflow & Repaint** | Triggers both **Reflow** and **Repaint** | Triggers only **Repaint** |
| **Screen Readers** | Ignored by accessibility tree | Ignored, but preserves dimensions |
</details>

---

## 5. CSS Flexbox, Grid, Animations & Responsive Design

### Q16. What is the difference between `justify-content` and `align-items` in Flexbox?
<details>
<summary><b>View Answer</b></summary>

- **`justify-content`**: Aligns flex items along the **Main Axis** (Horizontal when `flex-direction: row`, Vertical when `flex-direction: column`).
  - Values: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`.
- **`align-items`**: Aligns flex items along the **Cross Axis** (perpendicular to the main axis).
  - Values: `stretch`, `center`, `flex-start`, `flex-end`, `baseline`.
</details>

---

### Q17. How do CSS Transitions differ from CSS Keyframe Animations?
<details>
<summary><b>View Answer</b></summary>

- **CSS Transitions**: Smoothly animate property changes between two discrete states (e.g., initial state to `:hover` state). Requires an explicit trigger.
- **CSS Animations (`@keyframes`)**: Allow multi-step animations across granular percentages (`0%`, `50%`, `100%`), loop indefinitely (`animation-iteration-count: infinite`), alternate directions, and run automatically without user interaction.
</details>

---

### Q18. Why is the `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag essential?
<details>
<summary><b>View Answer</b></summary>

Without this tag, mobile browsers assume a desktop viewport width (typically 980px) and scale the page down to fit the small mobile screen, causing tiny, unreadable text. Setting `width=device-width` sets the viewport width to match the physical device width in CSS pixels at a 1:1 scale (`initial-scale=1.0`), enabling CSS media queries to activate correctly.
</details>

---

## 6. JavaScript Variables, Scopes & Hoisting

### Q19. Compare `var`, `let`, and `const` in detail.
<details>
<summary><b>View Answer</b></summary>

| Feature                    | `var`                                             | `let`                                     | `const`                                   |
| :---                       | :---                                              | :---                                      | :---                                      |
| **Scope**                  | Function / Global Scope                           | Block Scope (`{}`)                        | Block Scope (`{}`)                        |
| **Hoisting**               | Hoisted and initialized with `undefined`          | Hoisted into **Temporal Dead Zone (TDZ)** | Hoisted into **Temporal Dead Zone (TDZ)** |
| **Re-declaration**         | Allowed in same scope                             | SyntaxError                               | SyntaxError                               |
| **Re-assignment**          | Allowed                                           | Allowed                                   | TypeError (immutable binding)             |
| **Global Window Property** | Creates property on `window` (`window.x`)         | Does not attach to `window`               | Does not attach to `window`               |
</details> 

---

### Q20. What is Hoisting and what is the Temporal Dead Zone (TDZ)?
<details>
<summary><b>View Answer</b></summary>

- **Hoisting**: JavaScript's mechanism of allocating memory for variable and function declarations during the Creation Phase of the Execution Context before executing code.
- **TDZ (Temporal Dead Zone)**: The time span between entering a scope where a `let` or `const` variable is declared and the actual line where it is initialized. Accessing the variable within the TDZ throws a `ReferenceError`.

```javascript
console.log(a); // undefined (var is initialized with undefined)
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```
</details>

---

### Q21. Explain the difference between Function Declarations and Function Expressions regarding hoisting.
<details>
<summary><b>View Answer</b></summary>

- **Function Declaration**: Fully hoisted along with its definition. Can be invoked before its definition line.
  ```javascript
  greet(); // "Hello!" - works!
  function greet() { console.log("Hello!"); }
  ```
- **Function Expression**: Only the variable declaration is hoisted (as `undefined` with `var` or uninitialized with `let`/`const`). Calling it prior to assignment throws a `TypeError` (or `ReferenceError`).
  ```javascript
  sayHi(); // TypeError: sayHi is not a function
  var sayHi = function() { console.log("Hi!"); };
  ```
</details>

---

## 7. JavaScript Data Types, Operators & Coercion

### Q22. What are the Primitive Data Types in JavaScript? How do they differ from Reference Types?
<details>
<summary><b>View Answer</b></summary>

**7 Primitive Types:**
1. `string`
2. `number`
3. `boolean`
4. `undefined`
5. `null`
6. `bigint`
7. `symbol`

**Differences:**
- **Primitives**: Immutable, stored directly in the Stack memory, compared by **value**.
- **Reference Types** (`Object`, `Array`, `Function`): Mutable, stored in the Heap memory, variables hold memory addresses, compared by **reference**.
</details>

---

### Q23. What is the difference between `null` and `undefined`? What does `typeof null` return and why?
<details>
<summary><b>View Answer</b></summary>

- **`undefined`**: A variable has been declared but not assigned any value (default state).
- **`null`**: An intentional assignment representing "no value" or an empty object reference.
- **`typeof null === "object"`**: This is a historical bug in the original JavaScript implementation where values had a type tag (objects had tag `0`), and `null` was represented as a NULL pointer (`0x00`), hence misidentified as `"object"`.

```javascript
null == undefined;  // true  (loose equality with type coercion)
null === undefined; // false (strict equality: different types)
```
</details>

---

### Q24. Explain `==` (Loose Equality) vs `===` (Strict Equality) and Type Coercion.
<details>
<summary><b>View Answer</b></summary>

- **`===` (Strict Equality)**: Checks both **value** and **data type** without type conversion.
- **`==` (Loose Equality)**: Performs **Implicit Type Coercion** converting operands to common types before comparison.

**Examples:**
```javascript
5 == "5"       // true  (String converted to Number: 5 == 5)
5 === "5"      // false (Number !== String)
0 == false     // true  (Boolean false converted to Number 0)
0 === false    // false
[] == false    // true  ([] converts to "" then to 0, false converts to 0)
[] == ![]      // true  (![] is false -> [] == false -> 0 == 0)
```
</details>

---

### Q25. What is the Nullish Coalescing Operator (`??`) and how is it different from Logical OR (`||`)?
<details>
<summary><b>View Answer</b></summary>

- **Logical OR (`||`)**: Returns the right operand if the left operand is **any falsy value** (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
- **Nullish Coalescing (`??`)**: Returns the right operand **only** if the left operand is `null` or `undefined`.

```javascript
let count = 0;
let qty1 = count || 10; // 10 (because 0 is falsy)
let qty2 = count ?? 10; // 0  (because 0 is defined and not null/undefined)
```
</details>

---

## 8. JavaScript Functions, Closures & `this` Keyword

### Q26. What is a Closure in JavaScript? Provide a real-world use case.
<details>
<summary><b>View Answer</b></summary>

A **Closure** is the combination of a function bundled together with references to its surrounding state (lexical environment). A closure gives an inner function access to an outer function's scope even after the outer function has finished executing and returned.

**Use Case: Data Privacy / Encapsulation (Counter Module)**
```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: function() { count++; return count; },
    decrement: function() { count--; return count; },
    getCount: function() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count);       // undefined (private!)
```
</details>

---

### Q27. What are the differences between Regular Functions and Arrow Functions?
<details>
<summary><b>View Answer</b></summary>

1. **`this` Binding**:
   - Regular functions bind `this` dynamically based on **how** they are called.
   - Arrow functions do **not** have their own `this`; they capture `this` lexically from their enclosing scope.
2. **`arguments` Object**:
   - Regular functions have access to the `arguments` object.
   - Arrow functions do not (use rest parameters `(...args)` instead).
3. **Constructor Capability**:
   - Regular functions can be used as constructors with `new`.
   - Arrow functions cannot be called with `new` (throws `TypeError`).
4. **`prototype` Property**:
   - Regular functions have a `.prototype` property.
   - Arrow functions do not.
</details>

---

### Q28. What are Higher-Order Functions and Pure Functions?
<details>
<summary><b>View Answer</b></summary>

- **Higher-Order Function (HOF)**: A function that accepts another function as an argument, returns a function, or both (e.g., `map`, `filter`, `reduce`, `setTimeout`).
- **Pure Function**:
  1. Given the same inputs, it always returns the exact same output (deterministic).
  2. Produces no **side effects** (does not mutate global state, modify arguments, or make external API calls).
</details>

---

### Q29. What is an IIFE (Immediately Invoked Function Expression) and why is it used?
<details>
<summary><b>View Answer</b></summary>

An IIFE is a JavaScript function that runs as soon as it is defined:
```javascript
(function() {
  var privateVar = "I am safe from global scope pollution";
  console.log(privateVar);
})();
```

**Purpose:**
- Prevents polluting the global namespace.
- Creates private scope for variables before ES6 modules and `let`/`const` block scoping.
</details>

---

## 9. JavaScript Output Prediction & Code Puzzles

### Puzzle 1: Scope & Closures in Loops
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j);
  }, 100);
}
```
<details>
<summary><b>View Output & Explanation</b></summary>

**Output:**
```
3
3
3
0
1
2
```
**Explanation:**
- `var i` is function/globally scoped. By the time `setTimeout` callbacks execute from the event queue, the loop has completed and shared `i = 3`.
- `let j` is block-scoped. Each iteration of the loop creates a fresh lexical scope and binding for `j` which the callback closes over.
</details>

---

### Puzzle 2: Type Coercion Arithmetic
```javascript
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
```
<details>
<summary><b>View Output & Explanation</b></summary>

**Output:**
```
"122"
"32"
"02"
"112"
"NaN2"
NaN
```
**Explanation:**
1. `1 + "2"` -> `"12"` + `"2"` -> `"122"`.
2. `+"2"` is unary plus converting to number `2`. `1 + 2 = 3` + `"2"` -> `"32"`.
3. `-"1"` is unary negation -> `-1`. `1 + (-1) = 0` + `"2"` -> `"02"`.
4. `+"1"` -> `1` + `"1"` -> `"11"` + `"2"` -> `"112"`.
5. `"A" - "B"` results in `NaN`. `NaN + "2"` string concatenates to `"NaN2"`.
6. `NaN + 2` numeric addition yields `NaN`.
</details>

---

### Puzzle 3: Hoisting Order
```javascript
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();
```
<details>
<summary><b>View Output & Explanation</b></summary>

**Output:**
```
undefined
```
**Explanation:**
Inside the function `girl()`, `var x` is hoisted to the top of the function's local scope with initial value `undefined`. It shadows the outer `x = 21`. When `console.log(x)` runs, the local `x` is still `undefined`.
</details>

---

### Puzzle 4: Object References
```javascript
let a = { name: "Alice" };
let b = a;

a.name = "Bob";
console.log(b.name);

a = { name: "Charlie" };
console.log(b.name);
```
<details>
<summary><b>View Output & Explanation</b></summary>

**Output:**
```
Bob
Bob
```
**Explanation:**
- `b = a` copies the reference to the same heap object. Mutating `a.name` changes `b.name`.
- `a = { name: "Charlie" }` points `a` to a new object in memory, leaving `b` referencing the original object (`"Bob"`).
</details>

---

## 10. Real-World Scenario-Based Technical Questions

### Q30. How would you center a `<div>` both horizontally and vertically inside a parent container? List at least 3 modern CSS approaches.
<details>
<summary><b>View Answer</b></summary>

#### Approach 1: Flexbox (Most Common)
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### Approach 2: CSS Grid (Shortest)
```css
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

#### Approach 3: Absolute Positioning with Transform
```css
.parent {
  position: relative;
  height: 100vh;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
</details>

---

### Q31. What causes a Web Page to be unresponsive during complex JavaScript execution, and how can it be mitigated?
<details>
<summary><b>View Answer</b></summary>

**Cause:**
JavaScript runs on a single-threaded event loop on the browser's Main Thread, which also handles UI rendering, styles, reflows, and user input. Long synchronous computation blocks the main thread, freezing the UI.

**Mitigation Strategies:**
1. **Web Workers**: Offload heavy computational tasks to background threads without blocking DOM operations.
2. **Chunking / Async Slicing**: Break heavy operations into batches using `setTimeout(..., 0)` or `requestIdleCallback()`.
3. **Debouncing & Throttling**: Limit the rate of high-frequency event handlers (e.g., `scroll`, `resize`, `input`).
</details>

---

### Q32. Explain the difference between Debounce and Throttle techniques in JavaScript.
<details>
<summary><b>View Answer</b></summary>

- **Debounce**: Delays function execution until a certain amount of idle time has elapsed since the **last** event trigger. Ideal for auto-complete search inputs.
- **Throttle**: Ensures a function is executed at most once in a specified time interval, regardless of how many times the user fires the event. Ideal for window `resize` or infinite `scroll` listeners.
</details>

---

## 🚀 Recommended Practice Strategy
1. **Flashcard Practice**: Test yourself without opening the `<details>` dropdowns.
2. **Code Along**: Reproduce the CSS positioning layouts and JavaScript output prediction puzzles in your local browser console or test files.
3. **Deepen Knowledge**: Cross-reference each concept with the dedicated topic files in `HTML/`, `CSS/`, `Java Script/`, and `Notes/`.
