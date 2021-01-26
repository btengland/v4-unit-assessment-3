import {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'

class App extends Component{
  constructor(){
    super()

    this.state = {
      data: data,
      shelf: []
    }
  }

  addToShelf = (book) => {
    this.shelf.push(book)
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <BookList 
        shelf={this.addToShelf}
        books={this.state.data}/>
        <Shelf 
        shelf={this.state.shelf}/>
      </div>
    );
  }
}

export default App;