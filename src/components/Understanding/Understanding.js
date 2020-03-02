import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

class Understanding extends Component {

  state= {
    understanding: "-1"
  }

  nextPage =()=>{
    this.props.history.push('/supporting');
  } 

  prevPage =()=>{
    this.props.history.push('/feelings');
  }
  
  handleChangeFor = (event) => {
    this.setState({
        understanding: event.target.value
    })
    console.log(this.state);
  }

  recordResponse = (event) => {
    event.preventDefault();
      this.props.dispatch({
        type: 'SET_RESPONSE', 
        payload: this.state
      });
      this.props.dispatch({
        type: 'SET_UNDERSTAND', 
        payload: this.state
      });
    this.nextPage();
  }

render() {
return (
        <div className="main">
          <div className="meter">
            <span className="quarter"></span>
          </div>
          <h1>How well do you understand todays material?</h1>
          <p>please rank your understanding on a five point scale</p>
            <form onSubmit={this.recordResponse}>
            <label for="one">Dunce</label>
              <input required type="radio" id="one" className="radio" name="orderType" value="1"
                onChange={this.handleChangeFor}
              />
              <label for="one">-----</label>
              <input required type="radio" id="two" className="radio" name="orderType" value="2"
                onChange={this.handleChangeFor} 
                />
              <label for="two">-----</label>
              <input required type="radio" id="three" className="radio" name="orderType" value="3"
                onChange={this.handleChangeFor}
              />
              <label for="three">-----</label>
              <input required type="radio" id="four" className="radio" name="orderType" value="4"
                onChange={this.handleChangeFor} 
                />
              <label for="four">-----</label>
              <input required type="radio" id="five" className="radio" name="orderType" value="5"
                onChange={this.handleChangeFor} 
                />
              <label for="five">Rhode Scholar</label>
              <br/>
              <span>
                <button type="button" onClick={this.prevPage} className="prevButton">Prev</button>
                <button className="nextButton">Next</button>
              </span>
            </form>
        </div>
    );
  }
} 

export default connect()(Understanding);