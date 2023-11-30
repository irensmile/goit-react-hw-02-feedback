import React, { Component } from "react";


export class FeedbackOptions extends Component {

    render() {
        return <div>
            <ul className="feedback">
                <li><button type="button" onClick={this.props.onLeaveFeedback}>Good</button></li>
                <li><button type="button" onClick={this.props.onLeaveFeedback}>Neutral</button></li>
                <li><button type="button" onClick={this.props.onLeaveFeedback}>Bad</button></li>
            </ul>
        </div>
    }
}