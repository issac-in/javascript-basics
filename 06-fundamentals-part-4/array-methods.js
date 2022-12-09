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

    /**
     * Merging (Concatenating) Arrays
     * 
     * The concat() method creates a new array by merging (concatenating) existing arrays.
     * The concat() method does not change the existing arrays. It always returns a new array.
     * The concat() method can take any number of array arguments.
     * The concat() method can also take strings as arguments.
     */
    () => {
        const koreanCars = ["Hyundai", "Kia", "GM Korea"];
        const japaneseCars = ["Toyota", "Honda", "Nissan"];
        const eastAsianCars = koreanCars.concat(japaneseCars); // Result is ["Hyundai", "Kia", "GM Korea","Toyota", "Honda", "Nissan"]

        const americanCars = ["Jeep", "Ford", "Tesla"];
        const cars = koreanCars.concat(japaneseCars, americanCars); // Result is ["Hyundai", "Kia", "GM Korea","Toyota", "Honda", "Nissan","Jeep", "Ford", "Tesla"]

        const moreCars = cars.concat("Volkswagen", "Audi", "BMW");
        // Result is ["Hyundai", "Kia", "GM Korea","Toyota", "Honda", "Nissan","Jeep", "Ford", "Tesla","Volkswagen", "Audi", "BMW"]
    }

    /**
     * Splicing and Slicing Arrays
     * 
     * The splice() method adds new items to an array  - does CHANGE original arrray
     * The slice() method slices out a piece of an array - does NOT CHANGE original array
     */
    () => {
        // Splice Parameters:
        // 1st Param - Defines the position aka index where new elements should be added (spliced in)
        // 2nd Param - Defines how many elements should be removed.
        // Rest of Param - define the new elements to be added
        const cars = ["Toyota","Hyundai","Jeep", "Audi"];
        cars.splice(2, 0, "Kia", "GM Korea"); // cars is now ["Toyota", "Hyundai", "Kia", "GM Korea", "Jeep", "Audi"]

        // splice() method returns an array with the deleted items:
        let removed = cars.splice(2, 2, "Tesla", "Ford"); // cars is now ["Toyota", "Hyundai", "Tesla", "Ford", "Jeep", "Audi"]
        removed; // holds ["Kia", "GM Korea"]

        // splice() can be used to remove elements w/o leaving undefined holes in the array
        cars.splice(2, 1); // remove 1 element from the 2nd index of cars
        cars; // cars is now ["Toyota", "Hyundai", "Ford", "Jeep", "Audi"] 
        // Note that the removal also has shifted the elements in the array accordingly.
    }
    () => {
        /**
         * slice() method slices out a piece of an array into a new array.
         * slice() creates a new array. It does not remove any elements from source array.
         */
        const cars = ["Toyota","Hyundai","Jeep", "Audi"];
        const aFewCars = cars.slice(1); // Slices out part of cars starting from index 2, aka "Jeep", result is ["Hyundai", "Jeep", "Audi"]
        const aCoupleCars = cars.slice(1,3); // Selects elements from start argument inclusive, up to end argument exclusive like [1,3), result is ["Hyundai","Jeep"]
    }
}