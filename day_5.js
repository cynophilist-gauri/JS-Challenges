//Task 1: Write a function to check if a number is even or odd and log the result to the console.
const number = 10
const eveOrOdd = (number) => {
    if(number % 2 == 0) console.log("Even");
    else console.log("Odd");
}
eveOrOdd(number)

//Task 2: Write a function to calculate the square of a number and return the result.
const value = 4
function square(value) {
    console.log("Square:", value * value);
}
square(value)

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const firstNumber = 30
const secondNumber = 20
function maximum(firstNumber, secondNumber) {
    if(firstNumber > secondNumber) console.log(firstNumber, "is greater");
    else console.log(secondNumber, "is greater");
}
maximum(firstNumber, secondNumber)

//Task 4: Write a function expression to concatenate two strings and return the result.
const string1 = "Gauri "
const string2 = "Agarwal"
function concatenate(string1, string2) {
    return (string1 + string2);
}
console.log(concatenate(string1, string2))

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const firstElement = 10
const secondElement = 10
const sum = (firstElement, secondElement) => {
    return (`Sum: ${firstElement + secondElement}`)
}
console.log(sum(firstElement, secondElement));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const string = "Gauri"
const contains = (string) => {
    return (string.includes("i"))
}
console.log(contains(string));

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const parameter1 = 5
function product(parameter1, parameter2) {
    return (`Product: ${parameter1 * parameter2}`)
}
console.log(product(parameter1, 2));

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const name = "Gauri Agarwal"
function greetings(name, age) {
    return (`Welcome, ${name}. Your age is ${age}.`)
}
console.log(greetings(name, 21));

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const num = 4;
const higherOrderFunction = (anotherFunction, num) => {
    for(let i=0; i<num; i++){
        anotherFunction();
    }
}

const callBackFunction = () => {
    console.log(`Gauri`);
}

console.log(higherOrderFunction(callBackFunction, num));

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const highOrderFunction = (functionOne, functionTwo, value) => {
    return functionTwo(functionOne(value))
}

function functionOne(value){
    return (value + 1)
}

function functionTwo(resultFromFunctionOne){
    return (resultFromFunctionOne * 2)
}

console.log(highOrderFunction(functionOne, functionTwo, 4));