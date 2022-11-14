import express from "express";
import bookRouter from "./routes/book-route.js";

const server: express.Application = express();
server.use(express.json());
server.use(bookRouter);

server.listen(5000, () => {
  console.log("server rodando...");
});
