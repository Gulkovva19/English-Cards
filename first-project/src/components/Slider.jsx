import Card from "./Card.jsx";
import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import wordsJson from '../resources/wordsJson.json';


function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [wordNumber, setwordNumber] = useState(0);
  const [wordLearned, setwordLearned] = useState([]);

  const nextSlide = () => {
    if (slideIndex !== wordsJson.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === wordsJson.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(wordsJson.length);
    }
  };

  const wordAdd = (id) => {
    const array = [...wordLearned];
    array.push(id);
    // setwordLearned(array);
    let result = [];
    for (let str of array) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    setwordLearned(result);
    console.log(result);
    setwordNumber(wordLearned.length);
  };

  const elements = wordsJson.map((word) => {
    const { id, ...wordProps } = word;
    return <Card key={id} id={id} wordAdd={wordAdd} {...wordProps} />;
  });

  return (
    <div>
    <div className="game-container">
      <button className="game-button" onClick={prevSlide}>
        <LeftOutlined />
      </button>
      <div>{elements[slideIndex - 1]}</div>
      <button className="game-button" onClick={nextSlide}>
        <RightOutlined />
      </button>
    </div>
    <div className="game-word">выученных слов {wordNumber}/{wordsJson.length}</div>
    </div>
  );
}

export default Slider;
