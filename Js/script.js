
let newBook = [];

const authorValue = document.querySelector("#author")
const titleValue = document.querySelector("#title")
const pagesValue = document.querySelector("#page")
const statusValue = document.querySelector("#status")

const bookBody = document.querySelector(".book-table")

const popUp = document.querySelector(".PopUpForm")



const addBook = document.querySelector("#add-book")
addBook.addEventListener('click', OpenForm)

const cancel = document.querySelector("#cancel")
cancel.addEventListener('click', closeForm)

const submit = document.querySelector("#submit")
submit.addEventListener('click', addBookToLibrary)


const $table = document
  .querySelector("table")
  .addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[0];
    if (e.target.innerHTML == "delete") {
      if (confirm(`are you sure you want to delete ${currentTarget.innerText}`))
        deleteBook(findBook(newBook, currentTarget.innerText));
    }
    if (e.target.classList.contains("status-button")) {
      changeStatus(findBook(newBook, currentTarget.innerText));
    }
    bookLibraryLoop();
  });



  class Book{
    constructor (author, title, pages, status){
      this.author = author
      this.title = title
      this.pages = pages
      this.status = status
  }
  }
  

  //Add book to Library
function addBookToLibrary(){
  const book = new Book(authorValue.value , titleValue.value, pagesValue.value, statusValue.value)
    newBook.push(book)
    bookLibraryLoop() 
    popUp.style.display = "none"
    addBook.style.display = "block"
}

//Looop  library
function bookLibraryLoop(){
    for( copy of newBook){
      // let tableRow = document.createElement("tr")
      // let authorHeader = document.createElement("th")
      // let titleHeader = document.createElement("th")
      // let pageHeader = document.createElement("th")

      // authorHeader.innerHTML= `${copy.author}`
      // titleHeader.innerHTML= `${copy.title}` 
      // pageHeader.innerHTML= `${copy.pages}` 

  
      // let statusButton = document.createElement("button")
      // let statusButtonHeader = document.createElement("th")
      // statusButton.classList = "status-button"
      // statusButtonHeader.appendChild(statusButton)


      // let deleteButton = document.createElement("button")
      // let deleteButtonHeader = document.createElement("th")
      // deleteButtonHeader.appendChild(deleteButton)

      // tableRow.appendChild(authorHeader)
      // bookBody.appendChild(tableRow)

    
      
        bookBody.innerHTML = " "
        const htmlBook = `
        <tr>
          <th>${copy.author}</th>
          <th>${copy.title}</th>
          <th>${copy.pages}</th>

          <th><button class="status-button">${copy.status}</button></th>
          <th><button class="delete">delete</button></th>
        </tr>
        `;
        bookBody.insertAdjacentHTML('beforeend', htmlBook)
    }

}

function changeStatus(statusBook) {
    if (newBook[statusBook].status === "read") {
      newBook[statusBook].status = "not read";
    } else newBook[statusBook].status = "read";
}

function deleteBook(currentBook) {
    newBook.splice(currentBook, currentBook + 1);
}

  function findBook(bookArray, name) {
    if (bookArray.length === 0 || bookArray === null) {
      return;
    }

    for (books of newBook)
      if (books.name === name) {
        return newBook.indexOf(books);

    }

  }

function OpenForm(){
    authorValue.value = ""
    titleValue.value = ""
    pagesValue.value = ""
    pagesValue.value = ""
    popUp.style.display = "block"
    addBook.style.display = "none"

}

function closeForm(){
    popUp.style.display = "none"
    addBook.style.display = "block"
}


