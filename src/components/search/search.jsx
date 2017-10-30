import React, { Component } from "react";
import Checkbox from "../checkbox";
import Selector from "../selector";
import "./search.css";

class Search extends Component {
  constructor(){
    super();
    this.state = {
      extraVisible: false
    }
    this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
  }
  onCheckRuleClick(e) {
    this.setState({extraVisible: !this.state.extraVisible});
  }
  render() {
    let extraVisible = this.state.extraVisible;

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
          <a onClick={this.onCheckRuleClick} className="search__extra-btn" >
            { (extraVisible ? "Скрыть" : "Показать всё") }
          </a>
          <div className={"search__extra " + (extraVisible ? "" : "none")}>
            <p className="search__extra text">Выберите год:</p>
            <div className="search__checkboxes">
              <Checkbox id="checkbox-1" value="Все" title="Все" />
              <Checkbox id="checkbox-2" value="2015" title="2015" />
              <Checkbox id="checkbox-3" value="2016" title="2016" />
              <Checkbox id="checkbox-4" value="2017" title="2017" />
            </div>
            <p className="search__extra text">Класификации:</p>
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
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
