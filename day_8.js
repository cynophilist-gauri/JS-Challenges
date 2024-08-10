//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Gauri Agarwal"
const age = 21

const print  = `Your name is ${name}, age is ${age}.`
console.log(print);

//Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = 
`The quick
brown fox
jumps over
the lazy dog`
console.log("Multi-Line string:", multiLineString);

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array = [1, 2, 3, 4, 5]
const [firstNumber, SecondNumber] = array
console.log("First Number:", firstNumber);
console.log("Second Number:", SecondNumber);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Macbeth",
    author: "William Shakespeare"
}
const {title: title, author: author} = book;
console.log("Tilte:", title);
console.log("Author:", author);

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newArray = [...array, 6, 7, 8, 9, 10]
console.log("New array:", newArray);

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function restOperator(...numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}
console.log("Sum:", restOperator(1, 2, 3, 4, 5));

//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(parameter1, parameter2 = 1){
    return parameter1 * parameter2;
}
console.log(product(10, 3));
console.log(product(20));

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const titleBook = "Macbeth"
const authorBook = "Shakespeare"

const bookDetails = {
    titleBook,
    authorBook,
    print() {
        console.log(`Title: ${this.titleBook}, Author: ${this.authorBook}`);
    }
}

console.log(bookDetails);
bookDetails.print();

//Task 9: Create an object with computed property names based on variables and log the object to the console.
const keyOne = "name"
const keyTwo = "author"
const keyThree = "year"

const detailsOfBook = {
    [keyOne] : "Macbeth",
    [keyTwo] : "Shakespeare",
    [keyThree] : "1700"
}

console.log(detailsOfBook);