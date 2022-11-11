import db from "../config/db.js";
import { Book } from "../protocols/book.js";

function getAllBooks() {
  return db.query(`SELECT * FROM books`);
}

function createBook(book: Book) {
  return db.query(
    `INSERT INTO books (name, author, publisher, genre, year) VALUES ($1, $2, $3, $4, $5)`,
    [book.name, book.author, book.publisher, book.genre, book.year]
  );
}

function updateBookStatus(bookId: number) {
  return db.query(`UPDATE books SET status = true WHERE id = $1`, [bookId]);
}

function deleteBook(bookId: number) {
  return db.query(`DELETE FROM books WHERE id = $1`, [bookId]);
}

export { getAllBooks, createBook, updateBookStatus, deleteBook };
