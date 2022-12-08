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

