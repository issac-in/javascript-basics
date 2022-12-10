# DOM Manipulation and Events - The Odin Project

## Notes
- The difference between a "nodelist" and an "array of nodes", is that even though a "nodelist" looks like an array, and somewhat acts like an array, several array methods are missing from nodelists. If needed though, you can convert the nodelist into an array, apparently via Array.from() or with the spread operator.

## Knowledge Check
> What is the DOM?

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage. It is a tree of "nodes" with different relationships depending on how they are arranged within the HTML document.

> How do you target the nodes you want to work with?

To target the nodes you want to work with, within the DOM, you use "selectors". You can do this by using a combination of CSS-style selectors and relationship properties to target the nodes you want.

> How do you create an element in the DOM?

> How do you add an element to the DOM?

> How do you remove an element from the DOM?

> How can you alter an element in the DOM?

> When adding text to a DOM element, should you use textContent or innerHTML? Why?

> Where should you include your JavaScript tag in your HTML file when working with DOM nodes?

> How do "events" and "listeners" work?

> What are three ways to use events in your code?

> Why are event listeners the preferred way to handle events?

> What are the benefits of using named functions in your listeners?

> How do you attach listeners to groups of nodeS?

> What is the difference between the return values of `querySelector` and `querySelectorAll`?

`element.querySelector(selector)` returns a reference to the first match of selector. On the other hand, `element.querySelectorAll(selectors)` returns a "nodelist" containing references to all of the matches of the selectors.

> What do as a "nodelist" contain?

> Explain the difference between "capture" and "bubbling".