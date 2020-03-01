import React, {Component} from 'react';
import '../App/App.css';
import {HashRouter as Router, Link} from 'react-router-dom';

class Header extends Component {

  
  render() {

    return (
        <header className="App-header">
          <Router>
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Link to="/admin" className="adminLink">Admin</Link>
          </Router>
        </header>
    );
  }
} 

export default Header;