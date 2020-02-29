import React, {Component} from 'react';
import '../App/App.css';

class Comments extends Component {

  state= [];

  handleClick =(event)=>{
    event.preventDefault();
    this.props.history.push('/review');
  } 
  
  handleChangeFor = (event) => {
    this.setState({
      state: {
        understanding: event.target.value
      }
    })
    console.log(this.state);
  }


render() {
return (
        <div className="comments">
          <h1>Comments!</h1>
          <p>any thing you would like us to know?</p>
          <form onSubmit={this.handleClick}>
          <input placeholder="feel free to speak your mind" 
              onChange={this.handleChangeFor}
          />
          <button className="nextButton" onClick={this.handleClick}>Next</button>
          </form>
        </div>
    );
  }
} 

export default Comments;