import React, { Component } from 'react';
import Search from './components/search/search.jsx';
import './common.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Search />
      </div>
    );
  }
}

export default App;
