import React from "react";
import ShelfSelector  from "./ShelfSelectors";

function Book({book, update, booksInShelves}) {
  if (booksInShelves && booksInShelves.filter((b) => b.id === book.id ).length > 0){
    let shelf = booksInShelves.filter((b) => b.id == book.id)[0].shelf;
    book.shelf = shelf;
  }
  return(
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks.thumbnail }}>
              <img src={book.imageLinks.thumbnail} alt={book.title} name={book.title} width="128px" height="193px" />
            </div>
            <div className="book-shelf-changer">
              <ShelfSelector book={book} update={update} />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
  );
};

export default Book;

