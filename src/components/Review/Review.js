import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';

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
          <div>
            {this.props.reduxState.responseReducer.map(response =>
            <div>
            <div key={response.feelings}>Feelings: {response.feelings}</div>
            <div key={response.understandings}>Understanding: {response.understanding}</div>
            <div key={response.supporting}>Supported: {response.supporting}</div>
            <div key={response.comments}>Comments: {response.comments}</div>

            </div>
            )}
          </div>
          <button className="nextButton" onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
} 

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Review);