import db from "../config/db.js";

function createUser(
  name: string,
  email: string,
  password: string,
  imageUrl: string
) {
  return db.query(
    `INSERT INTO users (name, email, password, "image-url") VALUES ($1, $2, $3, $4)`,
    [name, email, password, imageUrl]
  );
}

function createSession(token: string, userId: number) {
  return db.query(`INSERT INTO sessions (token, "user-id") VALUES ($1, $2)`, [
    token,
    userId,
  ]);
}

function getUserIdByEmail(email: string) {
  return db.query(`SELECT id FROM users WHERE email = $1`, [email]);
}

export { createUser, createSession, getUserIdByEmail };
