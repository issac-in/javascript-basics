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

