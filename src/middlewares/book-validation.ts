import { bookSchema } from "../schemas/book-schema.js";
import { Request, Response, NextFunction } from "express";
import { Book } from "../protocols/book.js";

async function validate(req: Request, res: Response, next: NextFunction) {
  const newBook = req.body as Book;
  const validation = bookSchema.validate(newBook);

  if (validation.error) {
    return res.send("O formato do livro enviado está incorreto");
  }

  return next();
}

export { validate };
