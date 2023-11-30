
import React, { Component } from "react";


export class App extends Component { 
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  


  render() {
    return <div
      style={{
        height: '100vh',
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
      <h2>Please leave feedback</h2>
      <ul className="feedback">
        <li><button type="button" onClick={this.onClick}>Good</button></li>
        <li><button type="button" onClick={this.onClick}>Neutral</button></li>
        <li><button type="button" onClick={this.onClick}>Bad</button></li>
        </ul>
      </div>

      <div>
      <h2>Statistics</h2>
      <ul className="feedback">
          <li>Good: <span>{ this.state.good}</span></li>
        <li>Neutral: <span>{ this.state.neutral}</span></li>
        <li>Bad: <span>{ this.state.bad}</span></li>
        </ul>
      </div>

    </div>;
  }
  onClick = (event) => {
    switch (event.target.innerText) {
      case 'Good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'Neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'Bad':
        this.setState({ bad: this.state.bad + 1 });
        break;
    }
}

}



