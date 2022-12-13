// const btn = document.querySelector('#btn-2');
// btn.onclick = () => alert("Hello World");

// const anotherBtn = document.querySelector('#btn-3');
// anotherBtn.addEventListener('click', () => {
//     alert("Hello World");
// });

// /**
//  * function (e) is a callback from addEventListener.
//  * 
//  * The e in that function is an object that references the event itself.
//  * Within that object, you have access to many useful properties and functions
//  * such as which mouse button or key was pressed, or information about the event's
//  * target - the DOM node that was clicked.
//  */
// anotherBtn.addEventListener('click', function(e) {
//     console.log(e);
// });

// anotherBtn.addEventListener('click', function(e) {
//     console.log(e.target);
// });

// anotherBtn.addEventListener('click', function(e) {
//     e.target.style.background = 'blue';
// });

// buttons is a node list. It looks and acts very similarly to an array
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});