//Task 1: Select an HTML element by its ID and change its text content.
const heading = document.getElementById("first").innerHTML = '<h3>Agarwal</h3>'

//Task 2: Select an HTML element by its class and change its background color.
const para = document.querySelector('.para')
para.style.backgroundColor = 'green'

//Task 3: Create a new div element with some text content and append it to the body.
const div = document.createElement('div')
div.innerText = "Newly created element"
document.body.appendChild(div)

//Task 4: Create a new li element and add it to an existing ul list.
function addLanguage(languageName){
    const li = document.createElement('li')
    li.innerHTML = languageName
    document.querySelector('#languages').appendChild(li)
}
addLanguage("Python")

//Task 5: Select an HTML element and remove it from the DOM.
document.querySelector('div').remove()

//Task 6: Remove the last child of a specific HTML element.
document.querySelector("li:last-child").remove()

//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.querySelector('img').setAttribute('src', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400')

//Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector('img').setAttribute('id', 'image')
document.querySelector('img').removeAttribute('id')

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector('#button')

button.addEventListener('click', (e) => {
    para.innerText = "Content changed due to clicking the button"
})

//Task 10: Add a mouseover event listener to an element that changes its border color.
button.addEventListener('mouseover', (e) => {
    button.style.border = '2px solid green'
})