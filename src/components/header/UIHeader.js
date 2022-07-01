import { Link } from "react-router-dom";
import "./style.scss";

export function UIHeader() {
  return (
    <div className="header">
      <Link to="/" className="header-link">Домой</Link>
      <Link to="/search" className="header-link">Поиск</Link>
    </div>
  );
}
