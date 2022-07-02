import { Link } from "react-router-dom";
import { HOME, SEARCH } from "../../router/routes-paths";
import "./style.scss";

export function UIHeader() {
  return (
    <div className="header">
      <Link to={HOME} className="header-link">Домой</Link>
      <Link to={SEARCH} className="header-link">Поиск</Link>
    </div>
  );
}
