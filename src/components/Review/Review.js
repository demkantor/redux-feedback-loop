import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';


class Review extends Component {


  handleClick =()=>{
  let objectToSend = {
       feeling: Number(this.props.reduxState.feelingReducer.feeling),
       understanding: Number(this.props.reduxState.understandingReducer.understanding),
       supporting: Number(this.props.reduxState.supportReducer.supporting),
       comments: this.props.reduxState.commentReducer.comments
     } 
    if(objectToSend.feeling === -1){
          swal({
            title: "your responses don't appear valid",
            text: "are you sure you want to submit?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("deal! feedback submitted!", {
                icon: "success",
              });
              this.axiosPostFunction(objectToSend);
            } else {
              swal("sending you back to start over!");
            }
            this.props.history.push('/');
          });
    }else
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
                    <td>{this.props.reduxState.feelingReducer.feeling}</td>
                    <td>{this.props.reduxState.understandingReducer.understanding}</td>
                    <td>{this.props.reduxState.supportReducer.supporting}</td>
                    <td>{this.props.reduxState.commentReducer.comments}</td>
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