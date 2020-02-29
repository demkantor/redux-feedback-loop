import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

class Understanding extends Component {

  state= null;

  nextPage =()=>{
    this.props.history.push('/supporting');
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
    this.nextPage();
  }

render() {
return (
        <div className="understanding">
          <h1>Understanding!</h1>
          <p>please rank your understanding of today's material on a five point scale</p>
            <form onSubmit={this.recordResponse}>
            <label for="one">Dunce</label>
              <input required type="radio" id="one" name="orderType" value="one"
                onChange={this.handleChangeFor}
              />
              <label for="one">-----</label>
              <input required type="radio" id="two" name="orderType" value="two"
                onChange={this.handleChangeFor} 
                />
              <label for="two">-----</label>
              <input required type="radio" id="three" name="orderType" value="three"
                onChange={this.handleChangeFor}
              />
              <label for="three">-----</label>
              <input required type="radio" id="four" name="orderType" value="four"
                onChange={this.handleChangeFor} 
                />
              <label for="four">-----</label>
              <input required type="radio" id="five" name="orderType" value="five"
                onChange={this.handleChangeFor} 
                />
              <label for="five">Rhode Scholar</label>
              <br/>
              <button className="nextButton">Next</button>
            </form>
        </div>
    );
  }
} 

export default connect()(Understanding);