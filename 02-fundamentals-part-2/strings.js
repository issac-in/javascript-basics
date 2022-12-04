const FRUITS = "Apple, Banana, Kiwi";

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