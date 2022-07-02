import "./style.scss";

export default function UIPage(props) {
  return (
    <div className="page">
      {props.children}
    </div>
  )
}