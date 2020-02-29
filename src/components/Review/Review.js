import React, {Component} from 'react';
import '../App/App.css';

class Review extends Component {

  handleClick =()=>{
    this.props.history.push('/submitted');
  }


render() {
return (
        <div className="review">
          <h1>Review!</h1>
          <h2>this is what you had to say</h2>
          <p>feelings: </p>
          <p>Understanding: </p>
          <p>Supported: </p>
          <p>comments: </p>
          <button className="nextButton" onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
} 

export default Review;