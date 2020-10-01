import React from 'react';
import EditableBook from './EditableBook'
class BookList extends React.Component {
      render() {
        const books = this.props.books.map(book => (
          <EditableBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            description={book.description}
            onDeleteClick={this.props.onDeleteClick}
            onUpdateClick={this.props.onUpdateClick}
          ></EditableBook>
        ));
        return (
          <div>
            {books}
          </div>
        );
      }
    }
   
export default BookList;