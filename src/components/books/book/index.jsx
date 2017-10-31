import React, { Component } from "react";
import PropTypes from 'prop-types';

class Book extends Component {

  render() {
    let name = this.props.data.name,
        autor = this.props.data.autor,
        year = this.props.data.year;

        console.log(this.props.data)

    return(
      <div className="books__row">
        <p className="books__name text">{name}</p>
        <p className="books__autor text">{autor}</p>
        <p className="books__year text">{year}</p>
      </div>
    )
  }
};

Book.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    autor: PropTypes.string,
    year: PropTypes.number
  })
}

export default Book;
