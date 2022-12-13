# DOM Manipulation and Events - The Odin Project

## Notes
- The difference between a "nodelist" and an "array of nodes", is that even though a "nodelist" looks like an array, and somewhat acts like an array, several array methods are missing from nodelists. If needed though, you can convert the nodelist into an array, apparently via Array.from() or with the spread operator.
- Keep in mind that JavaScript *does not* alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.
- Useful events to keep in mind are: click, dblclick, keydown, keyup, etc.
- We can only have one event handler for a specific event type, but we can add multiple event listeners for it. [Medium article on event handler vs event listener](https://medium.com/geekculture/event-handlers-vs-event-listeners-in-javascript-b4086b8040b0)

## Knowledge Check
> What is the DOM?

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage. It is a tree of "nodes" with different relationships depending on how they are arranged within the HTML document.

> How do you target the nodes you want to work with?

To target the nodes you want to work with, within the DOM, you use "selectors". You can do this by using a combination of CSS-style selectors and relationship properties to target the nodes you want.

> How do you create an element in the DOM?

`document.createElement(tagName, [options])` creates a new element of type `tagName`. `[options]` in this case means you can add some optional parameters to the function.

**Note:** Creating an element does NOT put your new element into the DOM - it simply creates it in memory. This way, it can be manipulated by adding styles, classes, ids, text, etc. before placing it on the page.

> How do you add an element to the DOM?

- `parentNode.appendChild(childNode)` appends `childNode` as the last child of `parentNode`.
- `parentNode.insertBefore(newNode, referenceNode)` inserts `newNode` into `parentNode` before `referenceNode`.

> How do you remove an element from the DOM?

`parentNode.removeChild(child)` removes `child` from `parentNode` on the DOM and returns a reference to `child`.

> How can you alter an element in the DOM?

When you have a reference to an element, you can use that reference to alter the element's own properties. This allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information, and more.

Examples:
`const div = document.createElement('div');`
- `div.setAttribute('id','theDiv');` // If id exists, update it to 'theDiv', else create an id w/ value 'theDiv'
- `div.getAttribute('id');` // Returns value of specified attribute, in this case 'theDiv'
- `div.removeAttribute('id');` // Removes specified attribute
- `div.classList.add('new');` // Adds class 'new' to your new div
- `div.classList.remove('new');` // Removes class 'new' from div
- `div.classList.toggle('active');` // If div doesn't have class 'active' then add it, or if it does, then remove it.

**Note:** It is often standard and cleaner to toggle a CSS rather than adding and removing inline CSS.

> When adding text to a DOM element, should you use textContent or innerHTML? Why?

Just for reference, to show how to use either:
- `div.textContent = 'Hello World';` // Creates a text node containing 'Hello World' and inserts it in div
- `div.innerHTML = '<span>Hello World</span>';` // Renders the HTML inside div

**Note:** It is preferred to use *textContent* to add text to a DOM element, and *innerHTML* should be used sparingly as it can create security risks if misused - (e.g. a very common way to do cross site scripting attack via JS injection).

To combat that risk, if you must use *innerHTML* (like to inject dynamic HTML into your page), make sure that nothing goes into that *innerHTML* is sent to you by the user unless you first escape that user input, and ensure it'll always render as a string, no matter what, and not possible to render as HTML, but only as text.

> Where should you include your JavaScript tag in your HTML file when working with DOM nodes?

**Answer:** The simplest way is to include your JavaScript at the bottom of your HTML file.

**Explanation:** JavaScript for the most part is ran whenever the JS file is ran, or when the script tag is encountered in the HTML. If you have included your JavaScript at the top of your file, many of these DOM manipulation methods won't work because the JS code is being run *before* the nodes are created in the DOM. That's why the simplest answer above is given, so that it gets run after the DOM nodes are parsed and created.

Alternatively, you can link the JavaScript file in the `<head>` of your HTML document. Use the `<script>` tag with the `src` attribute containing the path to the JS file, and include the `defer` keyword to load the file *after* the HTML is parsed, as such:

`<head> <script src="js-file.js" defer></script> </head>` // This way is good practice for modern browsers

**Note:** According to MDN, it is bad practice to pollute your HTML with JavaScript, and it's inefficient.

> How do "events" and "listeners" work?

Events are how we can manipulate the DOM with JavaScript dynamically. More specifically, Events are actions that occur on your webpage such as mouse-clicks or keypresses, and by using JavaScript, we can make our webpage listen and react to these events.

> What are three ways to use events in your code?

1. You can attach functions' attributes directly on your HTML elements
2. You can set the "on_event_" property on the DOM object in your JavaScript
3. You can attach event listeners to the nodes in your JavaScript.

All three ways are regularly used, but using event listeners is definitively the preferred method.

> Why are event listeners the preferred way to handle events?

Because we can create multiple handlers for the same event on the same target.

> What are the benefits of using named functions in your listeners?

Using named funtions in your listeners can clean up your code considerably, and is a really good idea if the function is something you are going to want to do in multiple places.

> How do you attach listeners to groups of nodes?

Using `querySelectorAll` we can get a nodelist of all of the items matching a specific selector, then to add to a listener to each item, we can iterate through the whole list w/ a loop, to do things more efficiently.

> What is the difference between the return values of `querySelector` and `querySelectorAll`?

`element.querySelector(selector)` returns a reference to the first match of selector. On the other hand, `element.querySelectorAll(selectors)` returns a "nodelist" containing references to all of the matches of the selectors.

> What do as a "nodelist" contain?

A nodelist is a collection that contains document nodes (element nodes, attribute nodes, and text nodes).
[W3 article on nodelist](https://www.w3schools.com/js/js_htmldom_nodelist.asp#:~:text=A%20NodeList%20is%20a%20collection,is%20always%20a%20live%20collection.)

> Explain the difference between "capture" and "bubbling".