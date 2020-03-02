import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

class Comments extends Component {

  state = {
    comments:''
  };

  nextPage =()=>{
    this.props.history.push('/review');
  } 

  prevPage =()=>{
    this.props.history.push('/supporting');
  }
  
  handleChangeFor = (event) => {
    this.setState({
        comments: event.target.value
    })
  }

  recordResponse = (event) => {
    event.preventDefault();
      this.props.dispatch({
        type: 'SET_RESPONSE', 
        payload: this.state
      });
      this.props.dispatch({
        type: 'SET_COMMENT', 
        payload: this.state
      });
    this.nextPage();
  }

render() {
return (
        <div className="comments">
          <div className="meter">
            <span className="threeQuarter"></span>
          </div>
          <h1>Do you have comments for staff today?</h1>
          <p>is there any thing you would like us to know?</p>
          <form onSubmit={this.recordResponse}>
          <input placeholder="feel free to speak your mind" 
              onChange={this.handleChangeFor}
              className="input" />
              <span>
                <button type="button" onClick={this.prevPage} className="prevButton">Prev</button>
                <button className="nextButton">Next</button>
              </span>
          </form>
        </div>
    );
  }
} 

export default connect()(Comments);