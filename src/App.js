import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/MainPage";


class BooksApp extends React.Component {
  
  render() {
    return (

      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}

export default BooksApp
