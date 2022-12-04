const whoIsThere = prompt("Who's there?");

if (whoIsThere === "Admin") {
    const password = prompt("Password?");
    if (password === "TheMaster") {
        alert("Welcome!");
    }
    else if (password === "" || password === null) {
        alert("Canceled.");
    }
    else {
        alert("Wrong password.");
    }
}
else if (whoIsThere === "" || whoIsThere === null) {
    alert("Canceled.");
}
else {
    alert("I don't know you.")
}