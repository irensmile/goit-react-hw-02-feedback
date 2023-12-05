
import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";


export class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  countTotalFeedback = () => {
    return this.state.good+this.state.neutral+this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round( this.state.good/this.countTotalFeedback()*100);
  }

  onClick = (event) => {
    const key = event.target.innerText;
    this.setState({[key]: this.state[key] + 1 });
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
      <Section title="Please leave feedback">
         <FeedbackOptions options={this.state} onLeaveFeedback={this.onClick}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
          total={this.countTotalFeedback()} positivePercentage={ this.countPositiveFeedbackPercentage()} />
      </Section>

    </div>;
  }
}



