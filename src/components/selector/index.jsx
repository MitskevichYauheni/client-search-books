import React, { Component} from "react";
import PropTypes from 'prop-types';
import Select from 'react-select';
import "./selector.css";
import 'react-select/dist/react-select.css';

export default class Selector extends Component {
    render() {
        const { options, placeholder} = this.props;

        return (
            <Select className="new-selector" multi={true} simpleValue clearable={false} options={options}
            placeholder={placeholder}/>
        );
    }
}

Selector.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string
};
