import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {

    render() {
        return <div>
            <ul className={css.buttons}>
                <li><button type="button" onClick={this.props.onLeaveFeedback}>Good</button></li>
                <li><button type="button" onClick={this.props.onLeaveFeedback}>Neutral</button></li>
                <li><button type="button" onClick={this.props.onLeaveFeedback}>Bad</button></li>
            </ul>
        </div>
    }
}