/**
 * One type of collection in JS are Arrays. Two other types include Set and Map.
 * 
 * The basic tool for looping through a collection, like Array in this case, is the for...of loop
 */
() => {
    const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

    for (const cat of cats) {
        console.log(cat);
    }
}

/**
 * JS also has more specialized loops for collections, and two of them are map() & filter().
 * 
 * You can use map() to do something to each item in in a collection and create a new collection containing the changed items. 
 */
() => {
    function toUpper(string) { return string.toUpperCase(); }
    const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
    const upperCats = cats.map(toUpper);
    console.log(upperCats); // Result is ['LEOPARD','SERVAL,'JAGUAR','TIGER','CARACAL','LION']
}

/**
 * You can use filter() to test each item in a collection, and create a new collection containing only items that match.
 */
() => {
    function lCat(cat) { return cat.startsWIth('L'); }
    const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
    const filtered = cats.filter(lCat);
    console.log(filtered); // Result is ["Leopard", "Lion"]
}