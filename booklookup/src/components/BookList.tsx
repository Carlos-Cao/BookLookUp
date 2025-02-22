"use client";

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    publisher?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.items) {
            setBooks(data.items);
          } else {
            setBooks([]);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="center-container">
        <TextField
          label="Search Books"
          variant="outlined"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginBottom: "10px" }}
        >
          Search
        </Button>
      </div>
      {books.length > 0 && (
        <div className="cards">
          {books.map((book) => (
            <Card key={book.id}>
              {book.volumeInfo.imageLinks && (
                <CardMedia
                  component="img"
                  image={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.volumeInfo.title}
                </Typography>
                {book.volumeInfo.authors && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`Authors: ${book.volumeInfo.authors.join(", ")}`}
                  </Typography>
                )}
                {book.volumeInfo.publishedDate && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`Published: ${book.volumeInfo.publishedDate}`}
                  </Typography>
                )}
                {book.volumeInfo.publisher && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`Publisher: ${book.volumeInfo.publisher}`}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
