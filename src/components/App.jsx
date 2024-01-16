
import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


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

  onClick = (key) => {
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
        {this.countTotalFeedback() > 0 ?
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
            positivePercentage={this.countPositiveFeedbackPercentage()} total={this.countTotalFeedback() } />
          :
          <Notification message="There is no feedback"></Notification>
        }
      </Section>

    </div>;
  }
}



