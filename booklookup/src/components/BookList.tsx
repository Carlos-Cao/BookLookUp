"use client";

import React, { useState, useEffect } from "react";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((response) => response.json())
      .then((data) => setBooks(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          {book.volumeInfo.imageLinks && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
