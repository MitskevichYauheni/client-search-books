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
      message: '',
      years: [
        { year: '2012', checked: false },
        { year: '2013', checked: false },
        { year: '2014', checked: false },
        { year: '2015', checked: false },
        { year: '2016', checked: false },
        { year: '2017', checked: false }
      ],
      options: [
        { author: 'Стивен Кинг'},
        { author: 'Генри Марш' },
        { author: 'Генри Форд' },
        { author: 'Владимир Познер' },
        { author: 'Ричард Докинз' },
        { author: 'Олег Фейгин' },
        { author: 'Стивен Хокинг' },
        { author: 'Питер Акройд' }
      ],
      valueSelect: 'Выберете автора...',
      allBooks: []
    }
    this.messageChange = this.messageChange.bind(this);
    this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    this.onShowBooks = this.onShowBooks.bind(this);
    this.onBtnSearchBook = this.onBtnSearchBook.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  onCheckRuleClick() {
    this.setState({extraVisible: !this.state.extraVisible});
  }
  handleCheckedChange(event){
    let years = [];

    this.state.years.map((item, i) => {
      (item.year === event.target.value) ?
        years.push({year: item.year, checked: event.target.checked}) :
        years.push(item)
    })

    this.setState({years: years});
    this.changeSearch();
  }
  handleChangeSelect(event) {
    this.setState({valueSelect: event.target.value});
    this.changeSearch();
  }
  messageChange(event) {
    event.preventDefault();
    this.setState({message: event.target.value});
  }
  changeSearch() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.searchBookServer()
      this.setState({allBooksVisible: true});
    }, 1500);
  }
  onShowBooks() {
    !this.state.allBooksVisible && this.allBookServer();
    this.setState({allBooksVisible: !this.state.allBooksVisible});
  }
  onBtnSearchBook(event) {
    event.preventDefault();
    this.searchBookServer();
    this.setState({allBooksVisible: true});
  }
  allBookServer(){
    fetch('http://localhost:8080/api/v1/all-books', {
      method: 'get',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
    .then(authResult => {
        this.setState({allBooks: authResult.allBooks});
      })
  }
  searchBookServer(){
    let years = [];
    this.state.years.map((item, i) => {
      (item.checked === true) && years.push({year: item.year})
    })

    fetch('http://localhost:8080/api/v1/search-books', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        message: this.state.message,
        years: years,
        author: this.state.valueSelect
      })
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
    .then(authResult => {
        this.setState({allBooks: authResult.allBooks});
      })
  }
  componentDidMount() {
    (this.refs.message).focus();
  }
  render() {
    let extraVisible = this.state.extraVisible,
        allBooksVisible = this.state.allBooksVisible,
        message = this.state.message,
        allBooks = this.state.allBooks,
        years = this.state.years,
        options = this.state.options,
        valueSelect = this.state.valueSelect;

        console.log(allBooks);

    return (
      <div className="search">
        <form className="search__form" onSubmit={this.onBtnSearchBook}>
          <div className="search__form-main">
            <input type="text" className="search__input" ref="message" value={message} onChange={this.messageChange} onKeyUp={this.changeSearch} />
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
            <div className="search__extra-col">
              <p className="search__extra-text text">Выберите автора:</p>
                {options.length > 0 &&
                  <Selector options={options} valueSelect={valueSelect} onChange={this.handleChangeSelect} />
                }
            </div>
            <div className="search__extra-col">
              <p className="search__extra-text text">Выберите год:</p>
              <div className="search__checkboxes">
                {years.length > 0 &&
                   years.map((item, i) => <Checkbox id={`checkbox-${i}`} value={item.year} title={item.year} onChange={this.handleCheckedChange} checked={item.checked} key={`book-${i}`}/> )
                }
              </div>
            </div>
          </div>
        </form>

        {(allBooksVisible) && <Books data={allBooks} />}

      </div>
    );
  }
}

export default Search;
