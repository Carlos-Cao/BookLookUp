"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";
import { Book } from "../types/types";

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
        <SearchBar
          query={query}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>
      {books.length > 0 && (
        <div>
          <div className="cards">
            {books.map((book, index) => (
              <BookCard key={`${book.id}-${index}`} book={book} />
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
                sx={{
                  backgroundColor: "#1a73e8",
                  color: "#fff",
                }}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={handleNextPage}
                sx={{
                  backgroundColor: "#1a73e8",
                  color: "#fff",
                }}
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
