const btn = document.querySelector('#btn-2');
btn.onclick = () => alert("Hello World");

const anotherBtn = document.querySelector('#btn-3');
anotherBtn.addEventListener('click', () => {
    alert("Hello World");
});

/**
 * function (e) is a callback from addEventListener.
 * 
 * The e in that function is an object that references the event itself.
 * Within that object, you have access to many useful properties and functions
 * such as which mouse button or key was pressed, or information about the event's
 * target - the DOM node that was clicked.
 */
anotherBtn.addEventListener('click', function(e) {
    console.log(e);
});

anotherBtn.addEventListener('click', function(e) {
    console.log(e.target);
});

anotherBtn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});