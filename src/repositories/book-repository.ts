import { QueryResult } from "pg";
import db from "../config/db.js";
import { Book, BookEntity } from "../protocols/book.js";

function getAllBooks(): Promise<QueryResult<BookEntity>> {
  return db.query(`SELECT * FROM books`);
}

function createBook(book: Book): Promise<QueryResult<BookEntity>> {
  return db.query(
    `INSERT INTO books (name, author, publisher, genre, year) VALUES ($1, $2, $3, $4, $5)`,
    [book.name, book.author, book.publisher, book.genre, book.year]
  );
}

function updateBookStatus(bookId: number): Promise<QueryResult<BookEntity>> {
  return db.query(`UPDATE books SET status = true WHERE id = $1`, [bookId]);
}

function deleteBook(bookId: number): Promise<QueryResult<BookEntity>> {
  return db.query(`DELETE FROM books WHERE id = $1`, [bookId]);
}

function getFinishedBooksAmount(): Promise<QueryResult> {
  return db.query(`SELECT COUNT(*) FROM books WHERE status=true`);
}

export {
  getAllBooks,
  createBook,
  updateBookStatus,
  deleteBook,
  getFinishedBooksAmount,
};
