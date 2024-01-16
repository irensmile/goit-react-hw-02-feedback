import css from './FeedbackOptions.module.css';

export const FeedbackOptions = (props) => (
    <div>
        <ul className={css.buttons}>
            {Object.keys(props.options).map(option =>(
                <li key={option}><button type="button" onClick={(event) => {
                        props.onLeaveFeedback(event.target.innerText);
                }}>{option}</button></li>
            ))}
        </ul>
    </div>
)
