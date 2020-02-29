import React, {Component} from 'react';
import '../App/App.css';

class Understanding extends Component {

  handleClick =()=>{
    this.props.history.push('/supporting');
  } 
  
render() {
return (
        <div className="understanding">
          <h1>Understanding!</h1>
          <button className="nextButton" onClick={this.handleClick}>Next</button>
        </div>
    );
  }
} 

export default Understanding;