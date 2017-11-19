import React, { Component} from "react";
import PropTypes from 'prop-types';
import "./selector.css";

export default class Selector extends Component {
    render() {
      const { options, valueSelect } = this.props;

        return (
          <label className="search__label-select" htmlFor="select">
            <select value={valueSelect} name="select" id="select" className="search__select" onChange={this.props.onChange} >
              <option value="Выберете автора...">Выберете автора...</option>
              {options.map((item, i) => <option value={item.author} key={`author-${i}`}>{item.author}</option> )}
            </select>
          </label>
        );
    }
}

Selector.propTypes = {
  options: PropTypes.array,
  valueSelect: PropTypes.string,
  onChange: PropTypes.func
};
