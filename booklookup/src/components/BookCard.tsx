import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Book } from "../types/types";
import DOMPurify from "dompurify";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const sanitizedHTML = DOMPurify.sanitize(book.searchInfo?.textSnippet ?? "");
  return (
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
              <strong>Authors:</strong> {book.volumeInfo.authors.join(", ")}
            </Typography>
          )}
          {book.volumeInfo.publishedDate && (
            <Typography variant="body2" component="p">
              <strong>Published:</strong> {book.volumeInfo.publishedDate}
            </Typography>
          )}
          {book.volumeInfo.publisher && (
            <Typography variant="body2" component="p">
              <strong>Publisher:</strong> {book.volumeInfo.publisher}
            </Typography>
          )}
          {book.searchInfo && (
            <Typography
              variant="body2"
              component="p"
              dangerouslySetInnerHTML={{
                __html: `<strong>Description:</strong> ${sanitizedHTML}`,
              }}
            />
          )}
        </CardContent>
      </Card>
    </a>
  );
};

export default BookCard;
