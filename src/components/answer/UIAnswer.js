import UIAnswerRow from "./UIAnswerRow";
import "./style.scss";

export default function UIAnswer(props) {
  return (
    <div>
      <h4>Вселенная ответила</h4>
  
      {
        props.collectionItems.map(
          (item, index) =>
            <div key={index} className="answer">
              {
                item.data.map(
                  (data, index) =>
                    <UIAnswerRow key={index} data={data} />
                )
              }
            </div>
        )
      }
    </div>
  )
}
