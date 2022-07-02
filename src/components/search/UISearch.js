import { useEffect, useState } from "react";
import makeSearch from "../../network/search.network";
import "./style.scss";
// Components
import UIPage from "../page/UIPage";

export const UISearch = () => {
  const params = {
    q: ""
  };
  let response = {};
  const [ modelValue, setModelValue ] = useState("");

  useEffect(() => {
    if(modelValue.length) {
      params.q = modelValue;
      const timeoutId = setTimeout(makeSearchWithInput, 1 * 500);
    
       return () => clearTimeout(timeoutId);
    }
  }, [modelValue]);

  const makeSearchWithInput = async() => {
    try {
      response = (await makeSearch(params)).json();
    } catch(e) {
      alert(e);
    }
  }

  const handleChange = (event) => {
    setModelValue(event.target.value);
  }

  return (
    <UIPage>
      <div className="searching">
        <span>Искать во Вселенной</span>
        <input
          value={modelValue}
          autoFocus
          type="text"
          placeholder="Введите..."
          onChange={handleChange}
          className="searching__input"
        />
      </div>
    </UIPage>
  )
}