import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import Book  from "./Book";
import SearchBar from "./SearchBar";

function SearchPage(props) {

  const ShowCase = ({results, updateBook}) => {
    return(
      <ol className="books-grid">      
        { results.map((book) => <Book book={book} update={updateBook}/> )}
      </ol>
    )
  };

  return (
    <div className="search-books">
      <SearchBar searchQuery={props.searchQuery} updateQuery={props.updateQuery}/>

      <div className="search-books-results">
        <ShowCase results={props.searchResults} updateBook={props.updateBook} />
      </div>
    </div>
  );
}


export default SearchPage;