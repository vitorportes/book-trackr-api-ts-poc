BOOKS:

GET: /books
This route return all books registered at the database

GET: /books/finished
This route returns the amount of books already finished by the user

POST: /books
This route is used to register a new book on the database

    Body: {
        "name": "Harry Potter e a Pedra Filosofal",
        "author": "J.K. Rowling",
        "publisher": "Editora Rocco",
        "genre": "Fantasia",
        "year": 1997
        }

PUT: /books/:bookId
This route is used to mark a registered book as read

DELETE: /books/:bookId
This route is used to delete a book from the database
