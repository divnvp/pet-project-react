import { useEffect, useState } from "react";
import makeSearch from "../../network/search.network";
import "./style.scss";
// Components
import UIPage from "../page/UIPage";
import UIAnswer from "../answer/UIAnswer";

export const UISearch = () => {
  const params = {
    q: ""
  };
  const [ modelValue, setModelValue ] = useState("");
  const [ collectionItems, setCollectionItems ] = useState([]);

  useEffect(() => {
    if(modelValue.length) {
      params.q = modelValue;
      const timeoutId = setTimeout(makeSearchWithInput, 1 * 500);
    
      return () => clearTimeout(timeoutId);
    }
  }, [modelValue]);

  const makeSearchWithInput = async () => {
    try {
      const { collection } = await makeSearch(params);

      setCollectionItems(collection.items);
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
        <div className="searhing-row">
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

        {collectionItems.length > 1 && <UIAnswer collectionItems={collectionItems} />}
      </div>
    </UIPage>
  )
}