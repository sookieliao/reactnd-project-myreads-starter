import React from 'react'
import * as BooksAPI from '../BooksAPI'
import SearchPage from './SearchPage';
import DisplayShelves from './DisplayShelves';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import '../App.css'

class Main extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      books: [],
      searchQuery: '',
      searchResults: [],
    };

    this.updateBook = this.updateBook.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateResults = this.updateResults.bind(this);
  };
 
  componentDidMount() {

    BooksAPI.getAll().then(results =>{
        this.setState({books: results});
      });

  };

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() =>{
      book.shelf = shelf;
      BooksAPI.getAll().then(results =>{
        this.setState({books: results});
        this.setState({searchQuery: "", searchResults: []})
        this.props.history.push("/");
      });
    });
  };

  updateQuery = (searchQuery) => {
    this.setState( {searchQuery}, () => {
      this.updateResults();
    });

    console.log(this.state.searchQuery);
  }

  updateResults() {
    if (this.state.searchQuery){
      BooksAPI.search(this.state.searchQuery).then(results => {
        if(results.error){
          return this.setState({searchResults:[]});
        }
        else{
          return this.setState({searchResults: results});
        }
      })
    }
    else{
      this.setState({searchResults:[]});
    }
    console.log('updated result', this.state.searchResults)
  }

  render() {
    return (
      <Switch>
        <Route path="/search" component={ () => <SearchPage updateBook={this.updateBook} updateQuery={this.updateQuery} searchResults={this.state.searchResults} searchQuery={this.state.searchQuery} />} />
        <Route path="/" component={ () => <DisplayShelves books={this.state.books} update={this.updateBook}/>} /> 
        <Redirect to="/" />
        
      </Switch>
    )
  }
}

export default withRouter(Main);