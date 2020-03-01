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

  removeMe=(properyName)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this feedback",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          axios.delete(`/api/response/${properyName.id}`)
          .then(function(response){
              swal("Poof! Your feedback has been removed!", {
                  icon: "success",
                });
          }).catch(function(err){
              alert('error with DELETE:', err);
          })
          this.getFeedback();
      } else {
        swal("Your feedback will stay!");
      }
      this.getFeedback();
    });
  }

  goHome =()=>{
    this.props.history.push('/');
  }

  addFlag=(feedback, properyName)=>{
    axios.put(`/api/response/${feedback.id}`, {flag: properyName})
     .then( response => {
       this.getFeedback();
     })
     .catch( error => {
       alert(`Couldn't update flag, please try again later`);
       console.log('Error with PUT flag', error);
     })
 }



render() {
return (
        <div className="admin">
          <h1>Previous Feedback</h1>
          <p>click a line to flag</p>
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
                  <tr key={feedback.id} data-value={feedback.flagged} onClick={() => 
                    this.addFlag(feedback, `${feedback.flagged}`)}>
                    <td>{feedback.feeling}</td>
                    <td>{feedback.understanding}</td>
                    <td>{feedback.support}</td>
                    <td>{feedback.comments}</td>
                    <td><button onClick={()=>this.removeMe(feedback)} className="deleteButton">Remove Order</button></td>
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