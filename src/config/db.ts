import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  connectionString: "postgres://postgres:1234@localhost:5432/book-trackr",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;
