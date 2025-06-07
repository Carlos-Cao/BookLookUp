import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="https://github.com/Carlos-Cao">
          <p style={{ color: "#fff" }}>
            &copy; {new Date().getFullYear()} Carlos-Cao
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
