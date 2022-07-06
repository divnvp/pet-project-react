import { Route, Routes } from "react-router-dom";
import { ANSWER_PAGE, HOME, SEARCH} from "./routes-paths";
// Components
import { UIHome } from '../components/home/UIHome';
import { UISearch } from '../components/search/UISearch';
import UIAnswerPage from "../components/answer-page/UIAnswerPage";

export const Router = () => {
  return (
    <Routes>
      <Route path={ HOME } element={<UIHome />} />
      <Route path={ SEARCH } element={<UISearch />} />
      <Route path={ ANSWER_PAGE } element={<UIAnswerPage />} />
    </Routes>
  )
}
