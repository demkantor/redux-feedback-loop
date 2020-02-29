import React, {Component} from 'react';
import '../App/App.css';

class Supporting extends Component {

  state= [];

  handleClick =(event)=>{
    event.preventDefault();
    this.props.history.push('/comments');
  } 
  
  handleChangeFor = (event) => {
    this.setState({
      state: {
        understanding: event.target.value
      }
    })
    console.log(this.state);
  }
  
render() {
return (
        <div className="supporting">
          <h1>Supporting!</h1>
          <p>please rank how well you are supported on a five point scale</p>
            <form onSubmit={this.handleClick}>
            <label for="one">Ignored</label>
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
              <label for="five">Pampered</label>
              <br/>
              <button className="nextButton">Next</button>
            </form>
        </div>
    );
  }
} 

export default Supporting;