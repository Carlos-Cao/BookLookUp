# BookLookUp

BookLookUp is a web app for searching and displaying book information built with React.

## Features

- Search for books using the Google Books API
- Display book details including title, authors, published date, publisher, and description
- Responsive design for mobile and desktop

## How to Use the Application

### Home Page

1. **Header**: The header displays the title of the application. Click on the title to return to the home page.

   - [src/components/Header.tsx](/booklookup/src/components/Header.tsx)

2. **Main Section**: The main section includes a search input and button to search for books, and displays the search results.

   - [src/components/BookList.tsx](/booklookup/src/components/BookList.tsx)

3. **Footer**: The footer includes a link to the GitHub repository and a button to scroll back to the top.

   - [src/components/Footer.tsx](/booklookup/src/components/Footer.tsx)

### BookList

1. The BookList component allows users to search for books and displays the search results with details.

   - [src/components/BookList.tsx](/booklookup/src/components/BookList.tsx)

2. Each book card includes the title, authors, published date, publisher, and description.

![BookLookUp](/booklookup/public/images/booklookup.png)

### Styling

- The project uses custom CSS for styling.
  - [src/app/globals.css](/booklookup/src/app/globals.css)

## License

Distributed under the MIT License. See `LICENSE` for more information.
