import {
  createBook,
  deleteBook,
  getAllBooks,
  updateBookStatus,
} from "../repositories/book-repository.js";
import { Request, Response } from "express";
import { Book } from "../protocols/book.js";

async function getBooks(req: Request, res: Response) {
  try {
    const books = (await getAllBooks()).rows;
    return res.send(books);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function insertNewBook(req: Request, res: Response) {
  const newBook = req.body as Book;

  try {
    await createBook(newBook);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function markBookAsRead(req: Request, res: Response) {
  const bookId: number = Number(req.params.bookId);

  try {
    await updateBookStatus(bookId);
    return res.send("Livro lido!").status(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function removeBook(req: Request, res: Response) {
  const bookId = Number(req.params.bookId);

  try {
    await deleteBook(bookId);
    return res.send("O livro foi removido");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { getBooks, insertNewBook, markBookAsRead, removeBook };
