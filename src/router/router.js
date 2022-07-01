import { Route, Routes } from "react-router-dom";
import { AUTH, HOME, SEARCH } from "./routes-paths";
// Components
import { UIHome } from '../components/home/UIHome';
import { UIAuth } from '../components/auth/UIAuth';
import { UISearch } from '../components/search/UISearch';

export const Router = () => {
  return (
    <Routes>
      <Route path={HOME} element={<UIHome />} />
      <Route path={AUTH} element={<UIAuth />} />
      <Route path={SEARCH} element={<UISearch />} />
    </Routes>
  )
}