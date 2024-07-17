//Task 1:
const number = 10
if(number > 0) {
    console.log("Positive");
}
else if(number = 0){
    console.log("Zero");
}
else console.log("Negative");

//Task 2:
const age = 21
if(age >= 18) console.log("Eligible to vote");
else console.log("Not eligible to vote");

//Task 3:
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

//Task 4:
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

//Task 5:
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

//Task 6:
const eveOrOdd = 10
console.log(eveOrOdd % 2 == 0 ? "Even Number" : "Odd Number");

//Task 7:
const year = 2000
if((year%4 === 0) && (year%100 != 0) || (year%400 === 0)) console.log("Leap year"); 