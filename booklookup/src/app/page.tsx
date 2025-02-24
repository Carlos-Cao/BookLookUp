import React from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div id="root">
      <Header />
      <div className="main-content">
        <BookList />
      </div>
      <Footer />
    </div>
  );
}
