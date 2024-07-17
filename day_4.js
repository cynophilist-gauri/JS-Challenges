//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i = 1; i <=10; i++){
    console.log(`5 * ${i} = ${i*5}`);
}

//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let num = 1;
let sum = 0;
while (num <= 10) {
    sum += num
    num++;
}
console.log("Sum:", sum);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let number = 10;
while(number >= 1){
    console.log(number);
    number--;
}

//Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop.
let anotherNumber = 1;
do {
    console.log(anotherNumber);
    anotherNumber++;
} while (anotherNumber <= 5);


//Task 6: Write a program to calculate the factorial of a number using a do ... while loop.
let i_ = 1;
let value = 5
let factorial = 1;
do {
    factorial *= i_;
    i_++;
} while (i_ <= value);
console.log("Factorial:", factorial);

//Task 7: Write a program to print a left traingular star pattern using nested for loops.
let pattern = "";
for(let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        pattern += "*";
    }
    pattern += "\n"
}
console.log(pattern);

//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i = 1; i <= 10; i++){
    if(i === 5) continue;
    console.log(i);
}

//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i = 1; i <= 10; i++){
    if(i === 7) break;
    console.log(i);
}
