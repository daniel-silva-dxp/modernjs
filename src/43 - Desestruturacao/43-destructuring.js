// Destructuring com Array
const number = [ 1, 2, 3, 4 ];
let [ f, g, ...h ] = number;
console.log(f, g, h);

const numbers = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
const [ a, [ b, c, d ], e ] = numbers;
console.log(a, b, c, d, e);
