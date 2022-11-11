import express from "express";
import bookRouter from "./routes/book-route.js";
import userRouter from "./routes/user-route.js";

const server: express.Application = express();
server.use(express.json());
server.use(userRouter);
server.use(bookRouter);

server.listen(5000, () => {
  console.log("server rodando...");
});
