import UITableRow from "../table/UITableRow";

export default function UIAnswer(props) {
  console.log(props);
  return (
    <div>
      <span>Вселенная ответила</span>

      <table>
        <tbody>
          {
            props.collectionItems.map((item, index) =>
              <tr>
                <UITableRow key={index} value={item} />
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}