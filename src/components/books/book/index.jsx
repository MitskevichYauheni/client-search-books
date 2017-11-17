import React, { Component } from "react";
import PropTypes from 'prop-types';

class Book extends Component {

  constructor(){
    super();
    this.state = {
      bookVisible: false,
    }
    this.onBookClick = this.onBookClick.bind(this);
  }

  onBookClick() {
    this.setState({bookVisible: !this.state.bookVisible});
  }

  render() {
    let bookVisible = this.state.bookVisible;
    const { name, author, year, description } = this.props.data;

        // console.log(this.props.data)

    return(
      <div onClick={this.onBookClick} className="books__row">
        <div className="books__title">
          <p className="books__name text">{name}</p>
          <p className="books__author text">{author}</p>
          <p className="books__year text">{year}</p>
        </div>
        {
          bookVisible &&
            <div className="books__description">
              <p className="books__info text">
                {description}
              </p>
            </div>
        }
      </div>
    )
  }
};

Book.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
    description: PropTypes.string
  })
}

export default Book;
