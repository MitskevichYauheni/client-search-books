import React, { Component } from 'react';
import './common.css';
import Search from './components/search/search.jsx';

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
