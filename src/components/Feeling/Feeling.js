import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

class Feeling extends Component {

  state= {
    feeling: "-1"
  }

  nextPage =()=>{
    this.props.history.push('/understanding');
  }

  prevPage =()=>{
    this.props.history.push('/');
  }

  handleChangeFor = (event) => {
    this.setState({
        feeling: event.target.value
    })
  }

  recordResponse = (event) => {
    event.preventDefault();
      this.props.dispatch({
        type: 'SET_RESPONSE', 
        payload: this.state
      });
      this.props.dispatch({
        type: 'SET_FEEL', 
        payload: this.state
      });
    this.nextPage();
  }
  
render() {

return (
        <div className="main">
          <div className="meter">
            <span className="one"></span>
          </div>
          <h1>Let us know how you are feeling today?</h1>
          <p>please rank how you feel today on a five point scale</p>
            <form onSubmit={this.recordResponse}>
            <label for="one">Abysmal</label>
              <input required type="radio" id="one" className="radio" name="orderType" value="1"
                onChange={this.handleChangeFor}
              />
              <label for="one">---</label>
              <input required type="radio" id="two" className="radio" name="orderType" value="2"
                onChange={this.handleChangeFor} 
                />
              <label for="two">---</label>
              <input required type="radio" id="three" className="radio" name="orderType" value="3"
                onChange={this.handleChangeFor}
              />
              <label for="three">---</label>
              <input required type="radio" id="four" className="radio" name="orderType" value="4"
                onChange={this.handleChangeFor} 
                />
              <label for="four">---</label>
              <input required type="radio" id="five" className="radio" name="orderType" value="5"
                onChange={this.handleChangeFor} 
                />
              <label for="five">Amazing!</label>
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

export default connect()(Feeling);