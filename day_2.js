const firstNumber = 20
const secondNumber = 10

//Task 1: Write a program to add two numbers and log the result to the console.
const sum = firstNumber + secondNumber
console.log("Sum of", firstNumber, "and", secondNumber, "is", sum);

//Task 2: Write a program to subtract two numbers and log the result to the console.
const difference =  firstNumber - secondNumber
console.log("Difference of", firstNumber, "and", secondNumber, "is", difference);

//Task 3: Write a program to multiply two numbers and log the result to the console.
const product = firstNumber * secondNumber
console.log("Product of", firstNumber, "and", secondNumber, "is", product);

//Task 4: Write a program to divide two numbers and log the result to the console.
const quotient = firstNumber / secondNumber
console.log("Quotient of", firstNumber, "and", secondNumber, "is", quotient);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const remainder = firstNumber % secondNumber
console.log("Remainder of", firstNumber, "and", secondNumber, "is", remainder);

//Task 6: Use the += operator to add a number to a variable and log the result to the console.
let number = 10
console.log(number);
number += 5
console.log(number);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
console.log(number);
number -= 5
console.log(number);

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if(firstNumber > secondNumber) console.log(firstNumber, ">", secondNumber);
else if(firstNumber < secondNumber) console.log(firstNumber, "<", secondNumber);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
if(number >= secondNumber) console.log(firstNumber, ">=", secondNumber);
if(firstNumber <= secondNumber) console.log(firstNumber, "<=", secondNumber);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
const numberValue = 20
const stringValue = "20"
if(numberValue == stringValue) console.log("NOT OK!");
if(numberValue === stringValue) console.log("OK!"); 

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if(10>5 && 10>9) console.log("10 is greater");

//Task 12: Write a program that uses the Il operator to combine two conditions and log the result to the console.
if(5<10 && 9<10) console.log("5 is smaller");

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
booleanValue = false
if(!booleanValue) console.log("OH YES!");

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
console.log(number>0 ? "Positive" : "Negative");
