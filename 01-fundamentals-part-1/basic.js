// // console.log("Goodbye World!");

// // let message = "Hello";
// // alert(message);

// // Multiple variable declaration in one line is doable,
// // let user = "John", age = 25, msg = "Hello";

// // but single line per variable is my preference like so
// // let user = "John";
// // let age = 25;
// // let msg = "Hello";

// // In older JS scripts, I may run into another keyword - var instead of let. They're almost the exact same - there are subtle differences.

// // message = "World";
// // alert(message);

// // message = user;
// // alert(message);

// // A variable should only be declared once. A repeated declaration of the same variable will trigger an error.

// // There are two limitations on variable names in JS
// // 1. The name must only contain letters, digits, or the symbols $ and _.
// // 2. The first character must not be a digit.

// // Hyphens are not allowed in variable names, and variables are case-sensitive.

// // let userName; // valid
// // let user_name; // valid
// // let user123; // valid
// // let $; // valid
// // let _; // valid

// // When the name contains multiple words camelCase is used.
// // It's international convention to use only English in variable names, even if we can use any language technically.

// // List of reserved words which cannot be used as variable names because JS uses them itself.
// // For example: let, class, return, and function are reserved.
// // URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

// // Normally, we need to define a variable before using it. But in older versions of JS, it was technically possible
// // to create a variable by mere assignment of the value without using let. This stilll works now if we don't put
// // 'use strict' in our scripts to maintain compability with older scripts.

// // To declare a constant, unchanging variable, use `const` instead of `let`
// // const myBirthday = "18.04.1982"; // You cannot reassign the const once declared.

// // Good practice to use constants as alias for difficult to remember values that are known PRIOR to execution, aka hard-coded values.
// // Such constatnts are named using capital letters and underscores

// // const COLOR_RED = "#F00";
// // const COLOR_GREEN = "#0F0";
// // const COLOR_BLUE = "#00F";
// // ... when we need to pick a color
// // let color = COLOR_BLUE;
// // alert(color);

// // When constants values are calculated in run-time, DURING the execution, just name the constant variables using normal camelCase.

// // Make sure to give variables names that are maximally descriptive and concise, human-readable, and consistent.
// // Stay away from abbreviations or short-names unless you really know what you're doing.

// // let - is a modern variable declaration
// // const -is like let, but the value of the variable cannot be changed
// // var - is an old school variable declaration. The subtle differences to let, can be worried about later. Just know it's different.

// // Task - Working with variables
// let admin;
// let name;
// name = "John";
// admin = name;
// //alert(admin);

// // Task - Giving the right name
// let earth = "Earth";
// let currUser = "user";

// // A variable name with 3 words in it is fine. 4 Words gets a bit too verbose.

// // JavaScript Arithmetic - https://www.w3schools.com/js/js_arithmetic.asp
// // The numbers in an arithmetic operation are called operands.
// // ** is the exponentiation operator (ES2016)
// // PEMDAS follows, MD has higher precedence than AD, but P can influence precedence of those.
// // If two operations share precedence, calculated left to right.

// // JavaScript Numbers - https://www.w3schools.com/js/js_numbers.asp
// // JS only has one type of number. Numbers can be written with or without decimals
// // Extra large or extra small numbers can be written with scientific (exponent) notation
// // JS numbers are always 64-bit floating point
// // Integers, aka numbers w/o a period or exponent notation, are accurate up to 15 digits.
// // Maximum number of decimals is 17.

// let x = 0.2 + 0.1; // Floating Point Arithmetic is not always 100% accurate;
// let y = (0.2 * 10 + 0.1 * 10) / 10; // to combat this, it helps to multiply and divide
// console.log(x);
// console.log(y);

// // Warning: JS uses the + operator for both addition and concatenation.
// // Numbers are added, Strings are concatenated.

// // If you add two numbers, the result will be a number.
// // If you add two strings, the result will be concatenation.
// // If you add a number and a string, or vice versa, the result will be concatenation

// // This is going to output "The result is: 1020"
// let a = 10;
// let b = 20;
// console.log("The result is: " + a + b);

// // This is going to output "3030"
// let c = "30";
// console.log(a + b + c);

// // JavaScript strings can have numeric content
// a = 100; // a is a number
// b = "100"; // b is a string

// // JS will try to convert strings to numbers in all numeric operations
// a = "5"
// b = "10"
// console.log(b / a); // expect 2
// console.log(b * a); // expect 50
// console.log(a - b); // expect -5
// console.log(a + b); // expect 510 - the '+' operator is also the string concat operator.

// // NaN is a JS reserved word indicating a number is not a legal number.
// // Trying to do arithmetic with a non-numeric string will result in NaN (not a number).
// console.log(100 / "Apple"); // NaN
// console.log(100 / "10"); // 10
// console.log(isNaN(100 / "Apple")); // isNaN() is a global JS function to figure out if a value is NaN
// console.log(NaN + 5); // If you use NaN in a arithmetic operation, the result will also be NaN
// console.log(NaN + "5"); // Or result might be a concatenation like NaN5
// // NaN is classified as a number. typeof NaN returns number
// console.log(typeof NaN);

// // Infinity or -Infinity is the value JS returns if you calculate a number outside the largest possible number
// // Division by 0 also generates Infinity
// // Infinity is classified as a number. typeof Infinity returns number

// // JS interprets numeric constants as hexadecimal if they are preceded by 0x.
// console.log(0xFF);

// // By default, JS displays numbers as base 10 decimals. But we can use toString() method to output numbers from base 2 to base 36.
// // Hexadecimal is base 16, decimal is base 10, octal is base 8, binary is base 2.
// let myNum = 32;
// let num = 32;
// while (myNum != 1) {
//     console.log(num.toString(myNum));
//     myNum = myNum / 2;
// }

// // Normally JS numbers are primitive values created from literals.
// let z = 123;
// // But numbers can also be defined as objects with the keyword new.
// let zz = new Number(123);
// console.log(typeof z, typeof zz);

// // Number Objects can produce unexpected results, and the new keyword complicates the code and slows down execution speed
// // Do not create number objects, unless you know what you're doing.
// // When using ==, z and zz will be equal. But when using ===, z and zz are not equal.

// // Note: Comparing two JS objects ALWAYS returns FALSE, no matter if == or ===


// // URL: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math
// const lotsOfDecimal = 1.766584958675746364;
// console.log(lotsOfDecimal);
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// console.log(twoDecimalPlaces);

// let myNumber = "74";
// myNumber = Number(myNumber) + 3;
// console.log(myNumber);

// console.log(Math.pow(4,2)); // this is equivalent to 4**2, just an older way of doing the same thing

// // x++ and x-- are post increment/decrement. You return the value then increment/decrement it.
// // ++x and --x are pre increment/decrement. You increment/decrement it then return the value.

// // === is strict equality operator, testing if left and right values AND datatypes are identical to each other
// // !== is strict non equality operator, testing if left and right values AND datatypes are NOT identical to one another.

// // == and != are equality/non-equality operators,t esting only if the left and right values are identical/not-identical, they dont care about datatypes matching or not.


// // URL: https://javascript.info/operators

// // An operator is unary if it has a single operand
// let xx = 1;
// xx = -x;
// console.log(x); // -1, unary negation was applied

// // An operator is binary if it has two operands
// let yy = 2;
// let zzz = 3;
// console.log(zzz - yy); // 1, binary minus subtract values

// // Unary Operator - is also known as the negation operator
// // Unary Operator + does the same thing as Number(...) but shorter. Doesn't do anything to numbers. But if operand isn't a number, it converts it to a number.

// // Unary Operators have a higher precedence than binary operators.

// // = is a binary operator, that's known as the assignment operator
// // In JS, all operators return a value, including this way, so you can technically do stuff like this
// let g = 1;
// let h = 2;
// let i = 3 - (g = h + 1); // The call x = value, writes the value into x AND THEN RETURNS IT
// console.log(g, i); // 3 0

// // In JS, we have the ability to chain assignments
//let a,b,c;
//a=b=c = 2+2; // now a, b , and c all equal 4
// Chained assignments evaluate from right to left

// Modify in place operators like *=, +=, /=, -=, etc all have the same precedence of the normal assigmment operator =.
// This means they run after most other calculations
//let n = 2;
//n*= 3 + 5; // right part evaluated first, same as n *= 8, thus n = 16

// Bitwise Operators
// & AND, | OR, ^ XOR, ~ NOT, << LEFT SHIFT, >> RIGHT SHIFT, >>> ZERO-FILL RIGHT SHIFT
// These treat arguments as 32-bit integer numbers and work on the level of their binary representation, these aren't JS specific

// Comma operator , is one of the rarest and most unusual operators
// Sometimes used to write more concise code, allowing us to evaluate several expressions, dividing them with a comma ,. 
// Each of the expressions are evaluated but only the result of the last one is returned. For example,
///let a = (1+2, 3+4); //  the result is 7; the 1st expression 1+2 is evaluated and its result thrown away, the 3+4 is then evaluated and returned as result.

// Comma operator has a very low precedence, lower than assigmment operator =, so parentheses are critical.
// Otherwise, let a = 1+2, 3+4 evaluates the + first, turning it into a = 3, 7, then the assigmment operator assigns a=3, and the rest is ignored

// Comma operator is used for stuff like complex constructs to put several actions into one line
// for example, three operations in one line
// for (a = 1, b = 3, c = a*b; a < 10; a++) { ... }

// a = 1, b = 1
// c = 2, a = 2
// d = 1, b = 2

// "" + 1 + 0 // NaN - Correct answer is "10"
// "" - 1 + 0 // NaN - Correct answer is -1; "" converts to 0 when we do "" - val, e.g "" - 3 === 0 - 3
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // null - Correct answer is 1; null becomes 0 after numeric conversion
// undefined + 1 // undefined - Correct answer is NaN; undefined becomes NaN after numeric conversion
// " \t \n" - 2 // NaN - Correct Answer is -2' space characters ar etrimmed off string start and end when string is converted to anumber.
// // in this last case, the whole string consists of space characters, so similar to an empty string, it becomes 0 after numeric conversion.

// Unary operators MUST precede the operand they work on.
// +a, -a are correct. not a+ nor a-