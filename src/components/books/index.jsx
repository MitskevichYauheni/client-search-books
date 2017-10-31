import React, { Component } from "react";
import PropTypes from 'prop-types';
import Book from './book';
import "./books.css";

class Books extends Component {

  render() {
    let data = this.props.data,
        allBooks;

    if (data.length > 0) {
      allBooks = data.map(function(item, index) {
        return (
          <Book data={item} key={index}/>
        )
      })
    } else {
      allBooks = <p className="text">Список книг пуст</p>
    }

    return(
      <div className='books'>
        <div className="books__row">
          <p className="books__name text">Название</p>
          <p className="books__autor text">Автор</p>
          <p className="books__year text">Год</p>
        </div>
        {allBooks}
      </div>
    )
  }
};

Books.propTypes = {
  data: PropTypes.array
}
export default Books;
            // <Book data={item} />
