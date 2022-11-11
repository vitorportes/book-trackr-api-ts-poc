import { Router } from "express";
import {
  finishedBooksAmount,
  getBooks,
  insertNewBook,
  markBookAsRead,
  removeBook,
} from "../controllers/book-controller.js";
import { validate } from "../middlewares/book-validation.js";

const bookRouter = Router();

bookRouter.get("/books", getBooks);
bookRouter.get("/books/finished", finishedBooksAmount);
bookRouter.post("/books", validate, insertNewBook);
bookRouter.put("/books/:bookId", markBookAsRead);
bookRouter.delete("/books/:bookId", removeBook);

export default bookRouter;
