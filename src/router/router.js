import { Route, Routes } from "react-router-dom";
import { HOME, SEARCH } from "./routes-paths";
// Components
import { UIHome } from '../components/home/UIHome';
import { UISearch } from '../components/search/UISearch';

export const Router = () => {
  return (
    <Routes>
      <Route path={HOME} element={<UIHome />} />
      <Route path={SEARCH} element={<UISearch />} />
    </Routes>
  )
}