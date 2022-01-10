//  getting info from the from input fields


function addBook(title, author) {
    const object = {
        title: title.value,
        author: author.value,
    }

    
    return object

}

function getbooksFromStore() {
    let books;
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}
function addbookToStore (book) {
    const books = getbooksFromStore();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
}

function displayBooks (book) {
    const books = getbooksFromStore();
    books.forEach((book) => {
        const formContainer = document.querySelector('#form-container');
        const listContainer = document.createElement('div');
        listContainer.innerHTML +=`
        <h4>${book.title}</h4>
        <h4>${book.author}</h4>
        <button class='delete'>Remove</button>
        <hr>`;

        document.body.insertBefore(listContainer, formContainer);
    });
}

function removeBook (target) {
    target.parentElement.parentElement.remove()
}

// Adding book 
document.addEventListener('DOMContentLoaded', displayBooks)
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title');
    const author = document.getElementById('author');



// validate
if (title.value === '' || author.value === '') {

} else {
     // instantiate book
      console.log(addBook(title,author));
    const book = addBook(title,author);
    addbookToStore(book);
    displayBooks(book)
}
});



// event: remove a book


// Remove book from UI
const removeBtn = document.querySelectorAll('h4')
console.log(removeBtn)
removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        removeBook(e.target);
        // remove book from the store
    
        
    
    
    
               //  alert for book added

    
    });
})