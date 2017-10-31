import React, { Component } from "react";
import Checkbox from "../checkbox";
import Selector from "../selector";
import Books from '../books';
import "./search.css";

class Search extends Component {
  constructor(){
    super();
    this.state = {
      extraVisible: false,
      allBooksVisible: false,
      allBooks: []
    }
    this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    this.onShowBooks = this.onShowBooks.bind(this);
  }
  onCheckRuleClick(e) {
    this.setState({extraVisible: !this.state.extraVisible});
  }
  onShowBooks(e) {
    this.server();
    this.setState({allBooksVisible: !this.state.allBooksVisible});
  }
  server(){
    fetch('http://localhost:8080/all-books', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
    .then(authResult => {
        this.setState({allBooks: authResult.allBooks});
        // console.log(authResult.allBooks)
      })
  }
  render() {
    let extraVisible = this.state.extraVisible,
        allBooksVisible = this.state.allBooksVisible,
        allBooks = this.state.allBooks;

    return (
      <div className="search">
        <form action="" className="search__form">
          <div className="search__form-main">
            <input type="text" className="search__input"/>
            <button className="search__btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16">
                <path fillRule="evenodd" d="M16.17 15.608c-.127.127-.292.191-.458.191-.166 0-.332-.064-.458-.191l-4.99-5.009c-.998.8-2.245 1.3-3.618 1.3-3.214 0-5.828-2.624-5.828-5.85 0-3.226 2.614-5.85 5.828-5.85 3.213 0 5.828 2.624 5.828 5.85 0 1.378-.497 2.63-1.295 3.631l4.991 5.009c.253.254.253.666 0 .919zM6.646 1.499c-2.499 0-4.533 2.041-4.533 4.55s2.034 4.55 4.533 4.55c2.499 0 4.533-2.041 4.533-4.55s-2.034-4.55-4.533-4.55z"/>
              </svg>
            </button>
          </div>
          <div className="search__extra-btns">
            <a onClick={this.onShowBooks} className="search__extra-btn" >
              { (allBooksVisible ? "Скрыть Книги" : "Показать всё книги") }
            </a>
            <a onClick={this.onCheckRuleClick} className="search__extra-btn" >
              { (extraVisible ? "Скрыть параметры" : "Показать все параметры") }
            </a>
          </div>

          <div className={"search__extra " + (extraVisible ? "" : "none")}>
            <p className="search__extra text">Выберите год:</p>
            <div className="search__checkboxes">
              <Checkbox id="checkbox-1" value="Все" title="Все" />
              <Checkbox id="checkbox-2" value="2015" title="2015" />
              <Checkbox id="checkbox-3" value="2016" title="2016" />
              <Checkbox id="checkbox-4" value="2017" title="2017" />
            </div>
            {/*<p className="search__extra text">Класификации:</p>
              <Selector placeholder="Выберите жанр"
                options={[
                    {
                        value: 'Новинка',
                        label: 'Новинка'
                    },
                    {
                        value: 'Художественная литература',
                        label: 'Художественная литература'
                    },
                    {
                        value: 'Детская литература',
                        label: 'Детская литература'
                    }
                ]}
            /> */}
          </div>
        </form>

        {(allBooksVisible) ? <Books data={allBooks} /> : '' }

      </div>
    );
  }
}

export default Search;
