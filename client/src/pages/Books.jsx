import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
      const [books, setBooks] = useState([]);
      
       useEffect(() => {
         const fetchAllBooks = async () => {
           try {
             const res = await axios.get("http://localhost:5000/books");
             setBooks(res.data);
           } catch (err) {
             console.log(err);
           }
         };
         fetchAllBooks();
       }, []);

       console.log(books);


    return (
      <div>
        <h1>Elahe Book Shop</h1>
        <div className="books">
          {books.map((book) => (
            <div className="book" key={book.id}>
              {book.cover && <img src={book.cover} alt="book-cover" />}
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>{book.price}</span>
            </div>
          ))}
        </div>

        <button className="addHome">
          <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
            Add new book
          </Link>
        </button>
      </div>
    );
};

export default Books;