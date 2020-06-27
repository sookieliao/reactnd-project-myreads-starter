import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import Book  from "./Book";
import SearchBar from "./SearchBar";

class SearchPage extends Component {

  constructor(props){
      super(props);

      this.state = {
        query: '',
        result: []
      }

      this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery = (query) => {
    console.log('updating query....')
    this.setState( {query}, () => {
      console.log(this.state);
      this.updateResult();
    });
  }

  updateResult() {
    console.log('updating query....')
    if (this.state.query){
      BooksAPI.search(this.state.query).then(results => {
        if(results.error){
          return this.setState({result:[]});
        }
        else{
          return this.setState({result: results});
        }
      })
    }
    else{
      this.setState({result:[]});
    }
    console.log('updated result', this.state.result)
  }

  
  render() {
    const ShowCase = () => {
      return(
        <ol className="books-grid">      
          { this.state.result.map((book) => <Book book={book} update={this.props.update}/> )}
        </ol>
      )
    };

    return (
      <div className="search-books">
        <SearchBar updateQuery={this.updateQuery}/>

        <div className="search-books-results">
          <ShowCase />
        </div>
      </div>
    );
  }
}

export default SearchPage;