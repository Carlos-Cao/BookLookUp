# BookLookUp

BookLookUp is a web application built with React to search and view information about books.

## Features

- Search for books using a search bar
- View a list of books with detailed information
- Pagination for navigating through book results
- Smooth animations and responsive design

## How to Use the Application

### Home Page

1. **Header**: The header displays the title of the application.

   - [src/components/Header.tsx](/booklookup/src/components/Header.tsx)

2. **Search Bar**: The search bar allows users to input queries and search for books.

   - [src/components/SearchBar.tsx](/booklookup/src/components/SearchBar.tsx)

3. **Book List**: The main section displays a list of books fetched from the Google Books API. Each book is represented by a card with detailed information.

   - [src/components/BookList.tsx](/booklookup/src/components/BookList.tsx)
   - [src/components/BookCard.tsx](/booklookup/src/components/BookCard.tsx)

![BookLookUp Home](/booklookup/public/images/booklookup-home.png)

### Searching for Books

1. Enter a query in the search bar and click the "Search" button.
2. The application fetches and displays a list of books matching the query.
3. Each book card displays the book's title, author, and other relevant details.

![BookLookUp Search](/booklookup/public/images/booklookup-search.png)

### Pagination

1. Navigate through the book results using pagination buttons.
2. Smooth scrolling is implemented to enhance user experience.

![BookLookUp Pagination](/booklookup/public/images/booklookup-pagination.png)

### Styling

- The project uses CSS for styling, including hover effects and animations.
  - [src/styles/globals.css](/booklookup/src/app/globals.css)

## License

Distributed under the MIT License. See `LICENSE` for more information.
