import React, { Component} from "react";
import PropTypes from 'prop-types';
import "./checkbox.css";

class Checkbox extends Component {
  render() {
    let id = this.props.id,
        value = this.props.value,
        title = this.props.title,
        checked = this.props.checked;

    return(
      <div className="checkbox">
        <input id={id} type="checkbox" className="checkbox__input" value={value} onChange={this.props.onChange} checked={checked}/>
        <label htmlFor={id} className="checkbox__label text">{title}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
