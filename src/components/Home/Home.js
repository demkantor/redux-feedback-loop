import React, {Component} from 'react';
import '../App/App.css';
import {HashRouter as Router, Link} from 'react-router-dom';

class Home extends Component {

  
  render() {

    return (
        <div className="App">
        <Router>
          <Link to='/feelings'><h1>Take the Feedback Survey</h1></Link>
        </Router>
      </div>
    );
  }
}

export default Home;