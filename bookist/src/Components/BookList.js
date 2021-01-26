import {Component} from 'react';

class BookList extends Component{
    mappedBooks = (props) => props.books.map(e => e.length)

    render(){
        return(
            <img src={this.props.books.img}/>
        )
    }
}

export default BookList