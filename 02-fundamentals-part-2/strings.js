const FRUITS = "Apple, Banana, Kiwi";

/* 
    NOTE: Formally speaking, in JS, strings are immutable. They cannot be changed, only replaced. 
    Thus, all string methods generally return a new string, they don't modify the original string.

    URL: https://www.w3schools.com/js/js_string_methods.asp 
*/

// JS String - length
let fruitsLength = FRUITS.length;
console.assert(fruitsLength === 19, "Expected length is wrong.");

// JS String - slice()
let fruitsSliceA = FRUITS.slice(7, 13);
console.assert(fruitsSliceA === "Banana", "Expected slice(7,13) is wrong.");

let fruitsSliceB = FRUITS.slice(7);
console.assert(fruitsSliceB === "Banana, Kiwi", "Expected slice(7) is wrong.");

let fruitsSliceC = FRUITS.slice(-12);
console.assert(fruitsSliceC === "Banana, Kiwi", "Expected slice(-12) is wrong.");

let fruitsSliceD = FRUITS.slice(-12, -6);
console.assert(fruitsSliceD === "Banana", "Expected slice(-12, -6) is wrong.");

// JS String - substring() - Start & End values less than 0, are treated as 0.
let fruitsSubstringA = FRUITS.substring(7, 13);
console.assert(fruitsSubstringA === "Banana", "Expected substring(7, 13) is wrong.");

let fruitsSubstringB = FRUITS.substring(7);
console.assert(fruitsSubstringB === "Banana, Kiwi", "Expected substring(7) is wrong.");

let fruitsSubstringC = FRUITS.substring(-1, 1);
console.assert(fruitsSubstringC === "A", "Expected substring(-1 1) is wrong.");

let fruitsSubstringD = FRUITS.substring(-5);
console.assert(fruitsSubstringD === FRUITS, "Expected substring(-5) is wrong.");

// JS String - substr() - DEPRECATED - 2nd parameter specifices length of the extracted part.
let fruitsSubstrA = FRUITS.substr(7, 6);
console.assert(fruitsSubstrA === "Banana", "Expected substr(7, 6) is wrong.");

let fruitsSubstrB = FRUITS.substr(-4);
console.assert(fruitsSubstrB === "Kiwi", "Expected substr(-4) is wrong.");

// JS String - replace() - Case sensitive, returns new string, replaces only 1st match
let fruitsReplaceA = FRUITS.replace("Kiwi", "Strawberry");
console.assert(fruitsReplaceA === "Apple, Banana, Strawberry", "Expected replace('Kiwi', 'Strawberry') is wrong.");

let fruitsReplaceB = FRUITS.replace("KIwi", "Strawberry");
console.assert(fruitsReplaceB === FRUITS, "Expected replace('KIwi', 'Strawberry') is wrong.");

let fruitsReplaceC = FRUITS.replace(/KIWI/i, "Strawberry"); // the /i regex flag, lets us replace case insensitively
console.assert(fruitsReplaceC === "Apple, Banana, Strawberry", "Expected replace(/KIWI/i, 'Strawberry') is wrong.");

let fruitsReplaceD = FRUITS.replace(/a/g, "oo"); // the /g regex flag, lets us replace all matches in string
console.assert(fruitsReplaceD === "Apple, Boonoonoo, Kiwi", "Expected replace(/a/g, 'oo') is wrong.");

let fruitsReplaceE = FRUITS.replace(/a/gi, "oo"); // we can combine the /g and /i regex flags to replace all matches case insensitively
console.assert(fruitsReplaceE === "oopple, Boonoonoo, Kiwi", "Expected replace(/a/gi, 'oo') is wrong.");

// JS String - replaceAll() - an ES2021 feature, doesn't work in Internet Explorer.
let fruitsReplaceAllA = FRUITS.replaceAll(/a/gi, "u");
console.assert(fruitsReplaceAllA === "upple, Bununu, Kiwi", "Expected replaceAll(/a/gi, 'u') is wrong.");

//let fruitsReplaceAllB = FRUITS.replaceAll(/a/i, "u"); // TypeError thrown; When param is regex, the /g flag must be set.

let fruitsReplaceAllC = FRUITS.replaceAll(", ", " -=- ");
console.assert(fruitsReplaceAllC === "Apple -=- Banana -=- Kiwi", "Expected replaceAll(', ', ' -=- ') is wrong.");

// JS String - toUpperCase()
let fruitsToUpperCase = FRUITS.toUpperCase();
console.assert(fruitsToUpperCase === "APPLE, BANANA, KIWI", "Expected toUpperCase() is wrong.");

// JS String - toLowerCase()
let fruitsToLowerCase = FRUITS.toLowerCase();
console.assert(fruitsToLowerCase === "apple, banana, kiwi", "Expected toLowerCase() is wrong.");

// JS String - concat() - can be used instead of the plus binary operator
let fruitsConcatA = FRUITS.concat(", Strawberry");
console.assert(fruitsConcatA === "Apple, Banana, Kiwi, Strawberry", "Expected concat(', Strawberry') is wrong.");

let fruitsConcatB = FRUITS.concat(", Strawberry", ", Watermelon");
console.assert(fruitsConcatB === "Apple, Banana, Kiwi, Strawberry, Watermelon", "Expected concat(', Strawberry', ', Watermelon') is wrong.");

// JS String - trim() - removes whitespace from both sides of a string
let fruitsSpacedOutA = "  ".concat(FRUITS, "  ");
let fruitsTrim = fruitsSpacedOutA.trim();
console.assert(fruitsTrim === FRUITS, "Expected trim() is wrong.");

// JS String - trimStart() - Added in ECMAScript 2019, supported in all modern browsers since 2020
let fruitsSpacedOutB = "          ".concat(FRUITS);
let fruitsTrimStart = fruitsSpacedOutB.trimStart();
console.assert(fruitsTrimStart === FRUITS, "Expected trimStart() is wrong.");

// JS String - trimEnd() - Added in ECMAScript 2019, supported in all modern browsers since 2020
let fruitsSpacedOutC = FRUITS.concat("          ");
let fruitsTrimEnd = fruitsSpacedOutC.trimEnd();
console.assert(fruitsTrimEnd === FRUITS, "Expected trimEnd() is wrong.");

// JS String - padStart() - pads a string at the start with another string, til targetLength
let fruitsPadStart = FRUITS.padStart(22, "x");
console.assert(fruitsPadStart === "xxx".concat(FRUITS), "Expected padStart(22, 'x') is wrong.");

// JS String - padEnd() - pads a string at the end with another string, til targetLength
let fruitsPadEnd = FRUITS.padEnd(22, "x");
console.assert(fruitsPadEnd === FRUITS.concat("xxx"), "Expected padEnd(22, 'x') is wrong.");

// JS String - charAt() - returns character at specific index in the string
let fruitsChar = FRUITS.charAt(0);
console.assert(fruitsChar === "A", "Expected charAt(0) is wrong.");

// JS String - charCodeAt() - returns unicode (UTF-16 code) of the character at specific index in the string
let fruitsCharCode = FRUITS.charCodeAt(0);
console.assert(fruitsCharCode === 65, "Expected charCodeAt(0) is wrong.");

// JS String - [] - property access on strings is also a way to extract string characters
let fruitsPropertyAccess = FRUITS[0];
console.assert(fruitsPropertyAccess === "A", "Expected FRUITS[0] is wrong.");

/* 
    Property access is a bit unpredictable from expected usage. 
        1. Makes strings look like arrays, but they are not
        2. If no character is found, [] returns undefined, while charAt() returns an empty string
        3. It is read only. FRUITS[0] = "U" gives no error, but will not work at all.
*/

// JS String - split() - convert string to array, where each element in array is separated by the input string
const splitArrA = FRUITS.split(", ");
console.assert(splitArrA[1] === "Banana", "Expected split(', ') is wrong.");

const splitArrB = FRUITS.split(); // array index 0 will contain the whole string
console.assert(splitArrB[0] === FRUITS, "Expected split() is wrong.");

const splitArrC = FRUITS.split(""); // array of single characters
console.assert(splitArrC[3] === "l", "Expected split('') is wrong.");

/* 
    URL to detailed String Reference Page: https://www.w3schools.com/jsref/jsref_obj_string.asp
*/