/**
 * Note about loops:
 *  - for...in are used to loop over object properties
 *  - for...of and iterables are used to loop over arrays and iterable objects
 */

/**
 * While Loop Notes:
 * 
 * If the loop body only has a single statement, you can omit the {} like so:
 *   let i = 3;
 *   while (i) alert(i--);
 */

// do...while is used when you want the loop body to execute at least once regardless of condition
// otherwise, just stick to a normal while loop

/**
 * For Loop Notes:
 * 
 * Any part of the for loop can be skipped *technically*
 * 
 */
() => { // We can omit begin if we don't need to do anything at loop start
    let i = 0; // we have i already declared and assigned

    for (; i < 3; i++) { // no need for "begin"
        alert( i ); // 0, 1, 2
    }
}
() => { // We can also omit the step part if it's accounted for
    let i = 0;

    for (; i < 3;) {
      alert( i++ );
    }  
}
() => { // We can remove everything, technically too.
    for (;;) {
        // repeats without limits
    }
}
// The only things we must keep are the two semicolons in the for loop condition area.
// Otherwise, there would be a syntax error.

/**
 * Ternary Operator NOtes:
 * 
 * Please note that syntax constructs are not expressions that can be used with the ternary operator ?. 
 * In particular, directives like 'break' and 'continue' are not allowed there - syntax errors occur.
 * 
 * For example:
 *   if (i > 5) { alert(i); }
 *   else { continue; }
 * 
 * The above code will work, but rewriting it using the ternary operator below causes syntax error.
 *   (i > 5) ? alert(i) : continue;
 */

/**
 * Labels for break/continue
 * 
 * Sometimes, we need to break out from multiple nested loops at once.
 * For example, look at the following code:
 * 
 *  for (let i = 0; i < 3; i++) {
 *      for (let j = 0; j < 3; j++) {
 *          let input = prompt(`Value at coords (${i},${j})`, '');
 * 
 *          // What if I wanted to exit from here to Done (below)?
 *      }
 *  }
 * 
 *  alert('Done!');
 * 
 * We need a way to stop the process if the user canels the input. 
 * An ordinary break after input would only break the inner loop - this where labels come in.
 * 
 * A label is an identifier with a colon before a loop, for example:
 * 
 *  labelName: for (...) { ... }
 * 
 * The break <labelName> statement in the loop below breaks out to the label:
 * 
 *  outer: for (let i = 0; i < 3; i++) {
 *      for (let j = 0; j < 3; j++) {
 *          let input = prompt(`Value at coords (${i},${j})`, '');
 * 
 *          // If an empty string or canceled, then break out of both loops
 *          if (!input) break outer; // (*)
 * 
 *          // do something with the value...
 *      }
 *  }
 * 
 *  alert('Done!');
 * 
 * In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
 * So the control goes straight from (*) to alert('Done!').
 * 
 * We can also move the label onto a separate line, like so:
 * 
 *  outer:
 *  for (let i = 0; i < 3; i++) {...}
 * 
 * The continue directive can also be used with a label. In this case, code execution jumps to the next iteration
 * of the label loop. 
 * 
 * WARNING: Labels do not allow us to "jump" anywhere. They don't allow us to jump into an arbitrary place in the code.
 * For example, it's impossible to do this:
 * 
 *  break label; // jump the label below (doesn't work)
 *  
 *  label: for {...}
 * 
 * A break directive MUST be inside a code block. Technically, any labelled code block will do, e.g.:
 * 
 *  label: {
 *      //...
 *      break label;
 *      //...
 *  }
 * 
 * Although, 99.99% of the time break is used inside loops, as we've seen in the examples above.
 * A continue is only possible from inside a loop.
 */