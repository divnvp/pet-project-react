import UIAnswerRow from "./UIAnswerRow";

export default function UIAnswer(props) {
  return (
    <div>
      <span>Вселенная ответила</span>
  
      {
        props.collectionItems.map(
          (item, index) =>
            <div key={index}>
              {
                item.data.map(
                  (data, index) =>
                    <UIAnswerRow key={index} title={data.title} />
                )
              }
            </div>
        )
      }
    </div>
  )
}
