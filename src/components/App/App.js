import React, {Component} from 'react';
import axios from 'axios';
import '../App/App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';



class App extends Component {



  render() {

    return (
      <div className="App">
        <Header />
        <br/>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
