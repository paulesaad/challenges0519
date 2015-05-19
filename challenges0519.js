// Challenge zero
// 
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

function addNumbers(numberA, numberB) {
    return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.assert(twoPlusTwo === 4)


// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string. 
// 
// An example:
// 
// letterCount("hello world")
// 
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
// 
// Note that the space is not counted. All 
// letters should also be converted to lower
// case when counting them.

function letterCount(str) {
    return (str || '').replace(/[^a-z]/ig, '').split('').reduce(function(a, v, i, arr) {
        a[v] = (a[v]) ? a[v] + 1 : 1
        return a
    }, {})
}

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)
