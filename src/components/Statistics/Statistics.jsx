import React, { Component } from "react";
import { Notification } from "../Notification/Notification";


export class Statistics extends Component {

    render() {
    return <div>
        {this.props.total > 0 ?
            (<ul className="feedback">
          <li>Good: <span>{ this.props.good}</span></li>
        <li>Neutral: <span>{ this.props.neutral}</span></li>
        <li>Bad: <span>{this.props.bad}</span></li>
          <li>Total: {this.props.total}</li>
          <li>Positive feedback: {this.props.positivePercentage}%</li>
            </ul>)
            :
        (<Notification message="There is no feedback"></Notification>)}
      </div>
  }
}