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
          <button className="nextButton" onClick={this.handleClick}>Next</button>
        </div>
    );
  }
} 

export default Review;