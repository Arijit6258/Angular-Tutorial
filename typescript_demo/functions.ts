// name functions
function add(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
}

let number1: number = 10;
let number2: number = 20;

console.log("Addition of 2 params : " + add(number1, number2));
console.log("Addition of 3 params : " + add(number1, number2, -10));

// arrow functions
const sub = (number1: number, number2: number): number => number1 - number2;

console.log("Substraction : " + sub(number1, number2));

// functions expression
const multiply = function (number1: number, number2: number) {
    return number1 * number2;
}

console.log("Multiply : " + (multiply(number1, number2)));

// types of functions
console.log(typeof (add), typeof (sub), typeof (multiply));

// rest operator for param in functions

function addMultipleNumbers (num1 : number, num2 : number, ...num3 : number[]) : number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

console.log(addMultipleNumbers(1, 2, 3, 4, 5, 6));

// generice functions

function getItems<Type> (items : Array<Type>) : Type[] {
    return new Array<Type>().concat(items);
}

console.log(getItems<string> (["hello", "world", "!"]));
console.log(getItems<number>([1, 3, 10]));