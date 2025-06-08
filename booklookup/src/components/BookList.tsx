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
  searchInfo?: {
    textSnippet?: string;
  };
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    publisher?: string;
    infoLink: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40&startIndex=${startIndex}`
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
  }, [searchQuery, startIndex]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(query);
    setStartIndex(0);
    setCurrentPage(1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleNextPage = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 1);
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) => prevStartIndex - 1);
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          onClick={handleSearch}
          style={{
            marginBottom: "10px",
            backgroundColor: "#1a73e8",
            color: "#fff",
          }}
        >
          Search
        </Button>
      </div>
      {books.length > 0 && (
        <div>
          <div className="cards">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.volumeInfo.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={book.id}
                  sx={{
                    border: "1px solid",
                    borderRadius: "8px",
                  }}
                >
                  {book.volumeInfo.imageLinks && (
                    <CardMedia
                      component="img"
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                      style={{
                        width: "150px",
                        height: "auto",
                        margin: "0 auto",
                        border: "2px solid #ccc",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {book.volumeInfo.title}
                    </Typography>
                    {book.volumeInfo.authors && (
                      <Typography variant="body2" component="p">
                        <strong>Authors:</strong>{" "}
                        {book.volumeInfo.authors.join(", ")}
                      </Typography>
                    )}
                    {book.volumeInfo.publishedDate && (
                      <Typography variant="body2" component="p">
                        <strong>Published:</strong>{" "}
                        {book.volumeInfo.publishedDate}
                      </Typography>
                    )}
                    {book.volumeInfo.publisher && (
                      <Typography variant="body2" component="p">
                        <strong>Publisher:</strong> {book.volumeInfo.publisher}
                      </Typography>
                    )}
                    {book.searchInfo && (
                      <Typography variant="body2" component="p">
                        <strong>Description:</strong>{" "}
                        {book.searchInfo.textSnippet}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="pagination-buttons">
            <div className="current-page">
              <Typography variant="body1">
                Current Page: {currentPage}
              </Typography>
            </div>
            <div className="button-group">
              <Button
                variant="contained"
                onClick={handlePreviousPage}
                disabled={startIndex === 0}
                className="button"
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={handleNextPage}
                className="button"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
