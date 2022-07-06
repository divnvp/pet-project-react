import "./style.scss";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ANSWER_PAGE } from "../../router/routes-paths";

export default function UIAnswerRow(props) {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const navigate = useNavigate();
  
  // const getPictures = async () => {
  //   try {
  //     const gettingPictures = await getPicturesFrom(props.href);
  //     setPictures(gettingPictures);
  //   } catch (e) {
  //     //
  //   }
  // }
  
  const getAnswerPage = (answer) => {
    console.log(answer.target);
    // setSearchParams()
    // navigate(ANSWER_PAGE, { replace: true });
  }
  
  const getLocaleDate = () => {
    return new Date(props.data.date_created).toLocaleString();
  }
  
  return (
    <div className="answer">
      <button className="answer-title" onClick={getAnswerPage}>
        { props.data.title }
      </button>
      
      <div className="answer-row">
        <span className="answer-description">
          { getLocaleDate() } - { props.data.description.substring(0, 200) }
        </span>
      </div>
  
      {/*{ pictures.map(*/}
      {/*  (pic, index) =>*/}
      {/*    <img src={pic} alt="answer-picture" key={index} />*/}
      {/*) }*/}
    </div>
  )
}
