import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const WAIT_INTERVAL = 1000;

class SearchBar extends Component {
    constructor(props){
        super(props);
    
        this.state= {
          query: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.triggerUpdate = this.triggerUpdate.bind(this);
      }
    
      componentWillMount() {
        this.time = null;
      }
    
      handleChange({target: {value: query}}) {
        clearTimeout(this.time);
    
        this.setState({query}) // same as setState({query: query})
        this.time = setTimeout(this.triggerUpdate, WAIT_INTERVAL);
      }
    
      triggerUpdate() {
        let { query } = this.state;
        this.props.updateQuery(query);
      }
    
      render(){
        return(
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
                <input type="text" id="searchTxt" value={this.state.query} onChange={this.handleChange}
                  placeholder="Search by title or author" />
              </div>
            </div>
          )
      }
}

export default SearchBar;