import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/books");
bookRouter.get("/books/finished");
bookRouter.post("/books");
bookRouter.put("/books");
bookRouter.delete("/books");

export default bookRouter;
