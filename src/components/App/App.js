import React, {Component} from 'react';
import '../App/App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Feelings from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supporting from '../Supporting/Supporting';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';
import Home from '../Home/Home'



class App extends Component {


  render() {

    return (
      <div className="card">
        <Router>
          <Header />
          <br/>
          <br/>
          <Route exact path="/" component={Home}/>
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


export default App;
