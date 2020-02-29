import React, {Component} from 'react';
import '../App/App.css';

class Comments extends Component {

  handleClick =()=>{
    this.props.history.push('/review');
  }


render() {
return (
        <div className="comments">
          <h1>Comments!</h1>
          <button className="nextButton" onClick={this.handleClick}>Next</button>
        </div>
    );
  }
} 

export default Comments;