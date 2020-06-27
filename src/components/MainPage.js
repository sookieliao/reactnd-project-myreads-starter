import React from 'react'
import * as BooksAPI from '../BooksAPI'
import SearchPage from './SearchPage';
import DisplayShelfs from './DisplayShelfs';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css'

class Main extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      books: []
    };

    this.updateBook = this.updateBook.bind(this);
  };
 

  

  componentDidMount() {

    console.log(this.state.books)
    BooksAPI.getAll().then(results =>{
        this.setState({books: results});
      });
    console.log('main', this.state.books);

  };

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() =>{
      book.shelf = shelf;
      BooksAPI.getAll().then(results =>{
        this.setState({books: results});
      });
    });
  };

  render() {
    return (
      <Switch>
        <Route path="/search" component={ () => <SearchPage update={this.updateBook} />} />
        <Route path="/" component={ () => <DisplayShelfs books={this.state.books} update={this.updateBook}/>} /> 
        <Redirect to="/" />
        
      </Switch>
    )
  }
}

export default Main;