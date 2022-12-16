function byTagName(node, tagName) {
    // Your code here.
    // Starting from the root node param,
    // travel down the DOM
    // and as you find nodes with given tagName
    // add to array
    // return after completing DOM traversal, return array.
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2