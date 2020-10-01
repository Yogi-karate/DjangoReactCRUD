import React from 'react';

class Book extends React.Component {
    render() {
      return (
        <div className="card" >
          <div className="card-header d-flex justify-content-between">
            <span>
              <strong>Title: </strong>{this.props.title}
            </span>
            <span>
              <strong> Price:</strong>{this.props.price}
            </span>
            <div>
              <span onClick={this.props.onEditClick} className="mr-2"><i className="fa fa-edit"></i></span>
              <span onClick={this.props.onDeleteClick}><i className="fa fa-trash"></i></span>
            </div>
          </div>
          <div className="card-body">
            {this.props.description}
          </div>
          <div className="card-footer">
            <strong>Author:</strong>  {this.props.author}
          </div>
        </div>
      );
    }
  }
  export default Book;