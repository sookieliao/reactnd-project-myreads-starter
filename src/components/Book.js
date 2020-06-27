import React from "react";
import ShelfOptions  from "./ShelfSelectors";

function Book({book, update}) {
  return(
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks.thumbnail }}>
              <img src={book.imageLinks.thumbnail} alt={book.title} name={book.title} width="128px" height="193px" />
            </div>
            <div className="book-shelf-changer">
              <ShelfOptions book={book} update={update} />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
  );
};

export default Book;

