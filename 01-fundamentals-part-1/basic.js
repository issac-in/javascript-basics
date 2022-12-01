console.log("Goodbye World!");

let message = "Hello";
alert(message);

// Multiple variable declaration in one line is doable,
//let user = "John", age = 25, msg = "Hello";

// but single line per variable is my preference like so
let user = "John";
let age = 25;
let msg = "Hello";

// In older JS scripts, I may run into another keyword - var instead of let. They're almost the exact same - there are subtle differences.

message = "World";
alert(message);

message = user;
alert(message);

// A variable should only be declared once. A repeated declaration of the same variable will trigger an error.

// There are two limitations on variable names in JS
// 1. The name must only contain letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.

// Hyphens are not allowed in variable names, and variables are case-sensitive.

let userName; // valid
let user_name; // valid
let user123; // valid
let $; // valid
let _; // valid

// When the name contains multiple words camelCase is used.
// It's international convention to use only English in variable names, even if we can use any language technically.

// List of reserved words which cannot be used as variable names because JS uses them itself.
// For example: let, class, return, and function are reserved.
// URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

// Normally, we need to define a variable before using it. But in older versions of JS, it was technically possible
// to create a variable by mere assignment of the value without using let. This stilll works now if we don't put
// 'use strict' in our scripts to maintain compability with older scripts.

// To declare a constant, unchanging variable, use `const` instead of `let`
const myBirthday = "18.04.1982"; // You cannot reassign the const once declared.

// Good practice to use constants as alias for difficult to remember values that are known PRIOR to execution, aka hard-coded values.
// Such constatnts are named using capital letters and underscores

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
// ... when we need to pick a color
let color = COLOR_BLUE;
alert(color);

// When constants values are calculated in run-time, DURING the execution, just name the constant variables using normal camelCase.

// Make sure to give variables names that are maximally descriptive and concise, human-readable, and consistent.
// Stay away from abbreviations or short-names unless you really know what you're doing.

// let - is a modern variable declaration
// const -is like let, but the value of the variable cannot be changed
// var - is an old school variable declaration. The subtle differences to let, can be worried about later. Just know it's different.