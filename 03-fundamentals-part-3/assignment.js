function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(str) {
    let lowercaseStr = str.toLowerCase();
    let upperCaseChar = lowercaseStr.charAt(0).toUpperCase();
    return upperCaseChar.concat(lowercaseStr.slice(1));
}

function lastLetter(str) {
    let strLength = str.length;
    return str.charAt(strLength - 1);
}

function runTests() {
    console.assert(add7(1) === 8, "add7() failed.");
    console.assert(multiply(3,9) === 27, "multiply() failed.");
    console.assert(capitalize("the Odin Project") === "The odin project", "capitalize() failed.");
    console.assert(lastLetter("abcdefgh") === "h", "lastLetter failed.");
    console.log("End of Test Suite");
}