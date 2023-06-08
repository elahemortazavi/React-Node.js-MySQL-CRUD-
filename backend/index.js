import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@1234",
  database: "test",
});
//get info from table in db (the schema is "test" , the table is "books" that we created by mysql workbench)
app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//mysql creating new data (add a new book to "books" table)
app.post("/books", (req, res) => {
  const { title, desc, cover, price } = req.body;
  const values = [title, desc, cover, price];
  const q = "INSERT INTO books (title, `desc`, cover, price) VALUES (?)";

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


app.listen(5000, () => {
  console.log("Connected to backend.");
});