//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers);

//Task 2: Access the first and last elements of the array and log them to the console.
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length-1]);

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6)
console.log("Updated array after push:", numbers);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop()
console.log("Updated array after pop:", numbers);


//Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift()
console.log("Updated array after shift:", numbers);


//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(1)
console.log("Updated array after unshift:", numbers);

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledNumbers = numbers.map( (number) => number * 2)
console.log("Doubled array:", doubledNumbers);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbers = numbers.filter( (number) => number % 2 == 0)
console.log("Even numbers:", evenNumbers);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const initialValue = 0
const sum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue)
console.log("Sum:", sum);

//Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Numbers in the array:");
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Numbers in the array:");
numbers.forEach(element => {
    console.log(element);
});

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [[1,2], [3,4,5]]
console.log("2-d array:", matrix);

//Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][1]);