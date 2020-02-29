import React, {Component} from 'react';
import '../App/App.css';

class Submitted extends Component {

  handleClick =()=>{
    this.props.history.push('/');
  } 
  
render() {
return (
        <div className="submitted">
          <h1>Submitted!</h1>
          <button className="nextButton" onClick={this.handleClick}>Return Home</button>
        </div>
    );
  }
} 

export default Submitted;