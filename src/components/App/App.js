import React, {Component} from 'react';
import '../App/App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Feelings from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supporting from '../Supporting/Supporting';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';



class App extends Component {

  handleClick =()=>{
    
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <br/>
          <button className="nextButton" onClick={this.handleClick}>Begin Feedback Survey</button>
          <br/>
          <Route path="/feelings" component={Feelings}/>
          <Route path="/understanding" component = {Understanding}/>
          <Route path="/supporting" component={Supporting} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/submitted" component={Submitted} />
          <Route path="/admin" component={Admin} />
        </Router>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
