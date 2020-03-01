import React, {Component} from 'react';
import '../App/App.css';
import axios from 'axios';
import swal from 'sweetalert';



class Admin extends Component {

  state={
    feedbackArray: []
  }

  componentDidMount() {
    this.getFeedback();
  }
 
  getFeedback = () => {
    axios.get('/api/response')
      .then( response => {
        this.setState({
          feedbackArray: response.data
        });
      })
      .catch( error => {
        alert(`Couldn't read databse. Try again later`);
        console.log('Error getting database', error);
      })
  }

  removeMe=()=>{
    swal("Would you like to delete this?", {
      buttons: ["Not from the database no!", 'yeah, clear it out of there!'],
    });
  }

  goHome =()=>{
    this.props.history.push('/');
  }

  addFlag=()=>{
    swal("Would you like to flag this for further review?", {
      buttons: ["No thanks", 'yeah, need to look this over'],
    });
  }


render() {
return (
        <div className="admin">
          <h1>Previous Feedback</h1>
          <p>click to flag</p>
          <table>
            <thead>
              <tr>
                <th>Feeling Score</th>
                <th>Comprehension</th>
                <th>Staff Support</th>
                <th>Comments</th>
                <th>Delete Feedback</th>
              </tr>
            </thead>
            <tbody className="feedbackArray">
              {this.state.feedbackArray.map(feedback => 
                  <tr key={feedback.id} onClick={this.addFlag}>
                    <td>{feedback.feeling}</td>
                    <td>{feedback.understanding}</td>
                    <td>{feedback.support}</td>
                    <td>{feedback.comments}</td>
                    <td><button onClick={this.removeMe} className="deleteButton">Remove Order</button></td>
                  </tr>
                )}
            </tbody> 
        </table>
        <button className="nextButton" onClick={this.goHome}>Take Me Home</button>
      </div>
    );
  }
} 


export default Admin;