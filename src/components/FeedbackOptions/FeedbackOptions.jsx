import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {

    render() {
        return <div>
            <ul className={css.buttons}>
                {Object.keys(this.props.options).map(option =>(
                    <li key={option}><button type="button" onClick={this.props.onLeaveFeedback}>{option}</button></li>
                ))}
            </ul>
        </div>
    }
}