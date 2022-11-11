import {
  createBook,
  deleteBook,
  getAllBooks,
  getFinishedBooksAmount,
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

async function finishedBooksAmount(req: Request, res: Response) {
  try {
    const finished = (await getFinishedBooksAmount()).rows[0].count;
    console.log(finished);
    return res.send(`Você já leu ${finished} livros!`);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export {
  getBooks,
  insertNewBook,
  markBookAsRead,
  removeBook,
  finishedBooksAmount,
};
