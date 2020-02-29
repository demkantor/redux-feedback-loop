import React, {Component} from 'react';
import '../App/App.css';

class Supporting extends Component {

  handleClick =()=>{
    this.props.history.push('/comments');
  }
  
render() {
return (
        <div className="supporting">
          <h1>Supporting!</h1>
          <button className="nextButton" onClick={this.handleClick}>Next</button>
        </div>
    );
  }
} 

export default Supporting;