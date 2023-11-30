
import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";


export class App extends Component { 
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  


  render() {
    return <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <div>
      <h2>Please leave feedback</h2>
      <ul className="feedback">
        <li><button type="button" onClick={this.onClick}>Good</button></li>
        <li><button type="button" onClick={this.onClick}>Neutral</button></li>
        <li><button type="button" onClick={this.onClick}>Bad</button></li>
        </ul>
      </div> */}
      <Section title="Please leave feedback">
         <FeedbackOptions options={0} onLeaveFeedback={this.onClick}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
          total={this.countTotalFeedback()} positivePercentage={ this.countPositiveFeedbackPercentage()} />
      </Section>
      {/* <div>
      <h2>Statistics</h2>
      <ul className="feedback">
          <li>Good: <span>{ this.state.good}</span></li>
        <li>Neutral: <span>{ this.state.neutral}</span></li>
        <li>Bad: <span>{this.state.bad}</span></li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div> */}

    </div>;
  }
  countTotalFeedback = () => {
    return this.state.good+this.state.neutral+this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round( this.state.good/this.countTotalFeedback()*100);
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



