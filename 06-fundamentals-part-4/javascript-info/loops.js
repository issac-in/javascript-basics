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

// TODO - I'm on the section labels for break/continue;