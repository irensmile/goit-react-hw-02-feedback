import React, { Component } from "react";


export class Statistics extends Component {

    render() {
    return <div>
      {/* <h2>Statistics</h2> */}
      <ul className="feedback">
          <li>Good: <span>{ this.props.good}</span></li>
        <li>Neutral: <span>{ this.props.neutral}</span></li>
        <li>Bad: <span>{this.props.bad}</span></li>
          <li>Total: {this.props.total}</li>
          <li>Positive feedback: {this.props.positivePercentage}%</li>
        </ul>
      </div>
  }
}