import React, { Component } from "react";
import PropTypes from 'prop-types';
import Book from './book';
import NotFound from './notFound';
import "./books.css";

class Books extends Component {

  render() {
    const data = this.props.data;

    return(
      <div className='books'>
        <div className="books__row">
          <div className="books__title">
            <p className="books__name text">Название</p>
            <p className="books__author text">Автор</p>
            <p className="books__year text">Год</p>
          </div>
        </div>
        {data.length > 0 &&
           data.map((item, i) => <Book data={item} key={`book-${i}`}/>)
        }
        {data.length === 0 && <NotFound /> }
      </div>
    )
  }
};

Books.propTypes = {
  data: PropTypes.array
}
export default Books;
            // <Book data={item} />
