import React, {Component} from 'react';
import '../App/App.css';

class Submitted extends Component {

  handleClick =()=>{
    this.props.history.push('/');
  } 
  
render() {
return (
        <div className="main">
          <h1>Submitted!</h1>
          <h2>Thank you!</h2>
          <br/>
          <p>feel free to take the survey again</p>
          <button className="homeButton" onClick={this.handleClick}>Return Home</button>
        </div>
    );
  }
} 

export default Submitted;