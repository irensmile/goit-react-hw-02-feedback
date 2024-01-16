

export const Statistics = (props) => (
  <div>
    <ul className="feedback">
      <li>Good: <span>{props.good}</span></li>
      <li>Neutral: <span>{props.neutral}</span></li>
      <li>Bad: <span>{props.bad}</span></li>
      <li>Total: {props.total}</li>
      <li>Positive feedback: {props.positivePercentage}%</li>
    </ul>     
  </div>
) 
