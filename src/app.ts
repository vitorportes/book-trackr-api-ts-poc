import express from "express";
import userRouter from "./routes/user-route.js";

const server: express.Application = express();
server.use(express.json());
server.use(userRouter);

server.listen(5000, () => {
  console.log("server rodando...");
});
