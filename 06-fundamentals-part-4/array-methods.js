() => {
    const cars = ["Toyota","Honda","Kia","Hyundai"];

    let carsToString = cars.toString(); // Converts array to a string of comma separated array values.
    let carsJoin = cars.join(" * "); // SImilar to toString(), but you can specify the separator.
    
    cars.length; // currently 4
    cars.pop(); // removes last element from array, and returns the value that was "popped out" aka 'Hyundai'
    cars.length; // currently 3
    cars.push("Hyundai"); // adds a new element to the end of array, returning new array length of 4
}