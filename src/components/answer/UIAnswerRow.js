import "./style.scss";

export default function UIAnswerRow(props) {
  const getLocaleDate = () => {
    return new Date(props.data.date_created).toLocaleString();
  }
  
  return (
    <div className="answer">
      <span>{props.data.title}</span>
      <h5 className="answer-date">{getLocaleDate()}</h5>
    </div>
  )
}
