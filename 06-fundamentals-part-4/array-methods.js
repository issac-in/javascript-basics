() => {
    const cars = ["Toyota","Honda","Kia","Hyundai"];

    let carsToString = cars.toString(); // Converts array to a string of comma separated array values.
    let carsJoin = cars.join(" * "); // SImilar to toString(), but you can specify the separator.
    
    cars.length; // currently 4
    cars.pop(); // removes last element from array, and returns the value that was "popped out" aka 'Hyundai'
    cars.length; // currently 3
    cars.push("Hyundai"); // adds a new element to the end of array, returning new array length of 4
    cars.shift(); // removes 1st element from array and "shifts" all other elements to a lower index, returning value that was "shifted out" aka "Toyota"
    cars.unshift("Toyota"); // adds a new element to beginning of array, "unshifting" older elements, returning new array length of 4
    cars[2] = "Nissan"; // Array elements are accessed using their index number and can be changed like so
    cars[cars.length] = "Subaru"; // Easy way to append a new element to the array

    /**
     * Array elements can be deleted using the JavaScript operator delete.
     * Using delete leaves undefined holes in the array.
     * Preferably, use pop() or shift() instead, whenever possible.
     */
    delete cars[1]; // Removes "Honda", leaving an undefined hole in the 1st index of the array.
    cars[1] = "Suzuki"; // Setting "Suzuki" to 1st index of the array to avoid leaving undefined hole.
}