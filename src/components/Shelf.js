import React from 'react';
import Book from './Book'

function Shelf({books, shelf, update}) {
    if (books) {
        return (
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter((book)=> book.shelf === shelf)
                    .map((book) => <Book book={book} key={book.id} update={update}/>)
              }
            </ol>
          </div>
        )
    }
  };

  export default Shelf;