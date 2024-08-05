//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const bookProperties = {
    title: 'Macbeth',
    author: 'Shakespeare',
    year: 1603
}
console.log(bookProperties);

//Task 2: Access and log the title and author properties of the book object.
console.log("Title", bookProperties.title);
console.log("Author", bookProperties.author);

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
bookProperties.print = `Title of the book is ${bookProperties.title} and author is ${bookProperties.author}`
console.log(bookProperties);

//OR
let bookProperty = {
    title: "Some Title",
    author: "Some Author",
    print() {
        return `Title of the book is ${this.title} and author is ${this.author}`;
    }
};

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
bookProperties.year = 2019
console.log(bookProperties);

bookProperties.updateYear = function(newYear){
    this.year = newYear
}

bookProperties.updateYear(2024);
console.log(bookProperties);

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
 const library = {
    name: "State Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951
        }
    ]
}
console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library name:", library.name);

library.books.forEach( book => console.log(book.title))

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
function print() {
    console.log(`Book title: ${this.title} and year: ${this.year}`);
}

library.books.forEach( book => {
    book.print = print;
})

console.log(library.books.forEach( book => book.print()));

//Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value.
library.books.forEach( book => {
    console.log("Book: ");
    for (const property in book) {
        if (typeof book[property] !== 'function') {
            console.log(`${property}: ${book[property]}`);
        }
    }
    console.log("----------");
})

//Task 9: Use Object. keys and Object. values methods to log all the keys and values of the book object.
console.log(Object.keys(library));
console.log(Object.values(library));