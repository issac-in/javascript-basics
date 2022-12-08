// Creating an Array

// Using an array literal is the easiest, preferred way to create a JS Array.
// NOTE: It's common practice to declare arrays with the const keyword.
() => { const cars = ["Toyota", "Honda", "Kia"]; } 

// Alternate way is to initialize the array and then provide elements.
() => {
    const cars = [];
    cars[0] = "Toyota";
    cars[1] = "Honda";
    cars[2] = "Kia";
}

// A third way is to use the JS Keyword 'new'
() => {
    const cars = new Array("Toyota", "Honda", "Kia");
}

// Accessing Array Elements

// Can access array elements by referring to the respective index number
() => {
    const cars = ["Toyota", "Honda", "Kia"];
    let car = cars[0];
}

// Changing an Array Element
() => {
    const cars = ["Toyota", "Honda", "Kia"];
    cars[0] = "Hyundai"; // Changes the value of the first element in cars
}

// Arrays are Objects
/**
 * Arrays are Objects, but are a special type of objects.
 * The typeof operator in JS returns "object" for arrays.
 * But, JS arrys are best described AS arrays.
 * 
 * Arrays use **numbers** to access its elements.
 * Regular Objects use **names** to access its members.
 */

// Array Elements can be Objects
/**
 * JS variables can be ojects. Arrays are special kinds of objects.
 * Because of this, we can have varibles of different types in the
 * same Array. You can also have objects, functions, and arrays,
 * all within the same Array
 */
() => {
    function myFunction() {
        // do something
    }
    const cars = ["Toyota", "Honda", "Kia"];
    const myArray = [Date.now, myFunction(), cars];
}

// Array Properties and Methods
/**
 * JS Arrays real strengths are from its built-in properties and methods,
 * like the length property and sort() method.
 */
() => {
    const cars = ["Toyota", "Honda", "Kia"];
    let carsLength = cars.length; // Returns the number of array elements in cars
    
    let firstCar = cars[0]; // Access first Array element
    let lastCar = cars[carsLength - 1]; // Access last Array element
    
    cars.push("Hyundai"); // Adds a new element 'Hyundai' to cars
    cars[cars.length] = "BMW"; // Another way to add new element to array, be careful.
    cars[6] = "Tesla"; // Works, but will create undefined "holes" in array, be careful.
}

// Associative Arrays
/**
 * Associative arrays (aka hashes) are arrays with named indexes.
 * JS does NOT support arrays with named indexes.
 * In JS, arrys ALWAYS use NUMBERED indexes.
 * 
 * WARNING: If you use named indexes on an array,
 * JS will redefine the array to an object. After that,
 * some array methods & properties will produce incorrect results.
 */
() => { // Normal Usage
    const person = ["John", "Doe", 46];
    person.length; // returns 3
    person[0]; // returns 'John'
}
() => { // Warning Usage
    const person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    person.length; // will return 0
    person[0]; // will return undefined
}

// The Difference Between Arrays and Objects
/**
 * In JS, ARRAYS use NUMBERED indexes.
 * In JS, OBJECTS use NAMED indexes.
 * Arrays are a special kind of objects, with numbered indexes.
 */

// When to use Arrays, when to use Objects.
/**
 * JS does not support associative arrays.
 * You should use objects when you want the element names to be strings (text).
 * You should be use arrays when you want the element names to be numbers.
 */

