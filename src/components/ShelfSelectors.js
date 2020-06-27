import React from 'react';


function ShelfSelector({book, update}) {
    return(
      <select value={book.shelf || 'none'} onChange={(e) => update(book, e.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
    );
}

export default ShelfSelector;