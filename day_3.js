//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const number = 10
if(number > 0) {
    console.log("Positive");
}
else if(number = 0){
    console.log("Zero");
}
else console.log("Negative");

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 21
if(age >= 18) console.log("Eligible to vote");
else console.log("Not eligible to vote");

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const firstNumber = 10
const secondNumber = 20
const thirdNumber = 30
if(firstNumber > secondNumber){
    if(firstNumber > thirdNumber) console.log(firstNumber, "is the largest number");
    else console.log(thirdNumber, "is the largest number");
}
else {
    if (secondNumber > thirdNumber) console.log(secondNumber, "is the largest number");
    else console.log(thirdNumber, "is the largest number");
}

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
month = 4
switch (month) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter a valid input date");
        break;
}

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
const score = 95
let grade;
switch (true) {
    case (score >= 90):
        grade = 'A'
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
        }
        
console.log("Your grade is:", grade);

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const eveOrOdd = 10
console.log(eveOrOdd % 2 == 0 ? "Even Number" : "Odd Number");

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const year = 2000
if((year%4 === 0) && (year%100 != 0) || (year%400 === 0)) console.log("Leap year"); 
