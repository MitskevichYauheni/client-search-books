import React, { Component} from "react";
import PropTypes from 'prop-types';
import "./checkbox.css";

class Checkbox extends Component {
  render() {
    return(
      <div className="checkbox">
        <input id={this.props.id} type="checkbox" className="checkbox__input" value={this.props.value}/>
        <label htmlFor={this.props.id} className="checkbox__label text">{this.props.title}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
};

export default Checkbox;
