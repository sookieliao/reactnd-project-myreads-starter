import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as ShelfTypes from '../shared/ShelfTypes';


function DisplayShelfs(props) {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <Shelf books={props.books} shelf={ShelfTypes.CURRENTLY_READING} update={props.update} />
                    </div> 

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <Shelf books={props.books} shelf={ShelfTypes.WANT_TO_READ} update={props.update} />
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <Shelf books={props.books} shelf={ShelfTypes.READ} update={props.update} />
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );

}

export default DisplayShelfs;