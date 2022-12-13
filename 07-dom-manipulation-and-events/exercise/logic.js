const body = document.querySelector('body');

// a <p> with red text that says "Hey I'm red!"
const one = document.createElement('paragraph');
one.innerText = "Hey, I'm red!";
one.setAttribute('style', "color: red");
body.appendChild(one);

// an <h3> with blue text that says "I'm a blue h3!"
const two = document.createElement('h3');
two.innerText = "I'm a blue h3!";
two.setAttribute('style', "color: blue");
body.insertBefore(two, one);

// A <div> with a black border and pink background color w/ the following elements inside of it.
const three = document.createElement('div');
three.setAttribute('style', "border: solid black 2px; background-color: pink");
// A <h1> that says "I'm in a div" and <p> that says "ME TOO!"
const four = document.createElement('h1');
const five = document.createElement('p');
four.innerText = "I'm in a div";
five.innerText = "ME TOO!";
three.appendChild(four);
three.appendChild(five);
body.insertBefore(three, two);
