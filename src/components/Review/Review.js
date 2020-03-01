import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import axios from 'axios';


class Review extends Component {

  state={

  }

  componentDidMount=()=>{
    this.setState({

    })
  }

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
          <table>
            <thead>
              <tr>
                <th>Feeling Score</th>
                <th>Comprehension</th>
                <th>Staff Support</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody className="feedback">
                <tr key={Date.now()}>
                    <td>{this.props.reduxState.feelingReducer[0].feeling}</td>
                    <td>{this.props.reduxState.understandingReducer[0].understanding}</td>
                    <td>{this.props.reduxState.supportReducer[0].supporting}</td>
                    <td>{this.props.reduxState.commentReducer[0].comments}</td>
                  </tr>
            </tbody> 
        </table>
          <button className="nextButton" onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
} 

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Review);