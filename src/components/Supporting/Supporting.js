import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

class Supporting extends Component {

  state= null;

  nextPage =()=>{
    this.props.history.push('/comments');
  } 
  
  handleChangeFor = (event) => {
    this.setState({
        supporting: event.target.value
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
        type: 'SET_SUPPORT', 
        payload: this.state
      });
    this.nextPage();
  }
  
render() {
return (
        <div className="supporting">
          <div className="meter">
            <span className="half"></span>
          </div>
          <h1>How well do you feel supported by staff today?</h1>
          <p>please rank how well you are supported on a five point scale</p>
            <form onSubmit={this.recordResponse}>
            <label for="one">Ignored</label>
              <input required type="radio" id="one" name="orderType" value="1"
                onChange={this.handleChangeFor}
              />
              <label for="one">-----</label>
              <input required type="radio" id="two" name="orderType" value="2"
                onChange={this.handleChangeFor} 
                />
              <label for="two">-----</label>
              <input required type="radio" id="three" name="orderType" value="3"
                onChange={this.handleChangeFor}
              />
              <label for="three">-----</label>
              <input required type="radio" id="four" name="orderType" value="4"
                onChange={this.handleChangeFor} 
                />
              <label for="four">-----</label>
              <input required type="radio" id="five" name="orderType" value="5"
                onChange={this.handleChangeFor} 
                />
              <label for="five">Pampered</label>
              <br/>
              <button className="nextButton">Next</button>
            </form>
        </div>
    );
  }
} 

export default connect()(Supporting);