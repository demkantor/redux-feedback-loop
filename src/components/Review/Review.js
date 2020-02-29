import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import axios from 'axios';


class Review extends Component {

  handleClick =()=>{
    const feedback = this.props.reduxState.responseReducer
  let objectToSend = {
       feeling: Number(feedback[0].feeling),
       understanding: Number(feedback[1].understanding),
       supporting: Number(feedback[2].supporting),
       comments: feedback[3].comments
     } 
     console.log('this is objectToSend', objectToSend);    
    this.axiosPostFunction(objectToSend);
  } 

  axiosPostFunction=(input)=>{
    console.log('this is input', input);
    axios.post('/api/response', input)
   .then( response => {
   })
   .catch( error => {
     alert(`Couldn't submit responses at this time`);
     console.log('Error posting to feedback', error);
   })
    this.nextPage();
  }


  nextPage =()=>{
    this.props.history.push('/submitted');
    this.props.dispatch({
      type: 'CLEAR_RESPONSE'
    });
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
            <div key={response.feeling}>Feelings: {response.feeling}</div>
            <div key={response.understanding}>Understanding: {response.understanding}</div>
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