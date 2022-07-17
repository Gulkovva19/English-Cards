import Card from "./Card.jsx";
import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { observer, inject } from 'mobx-react';


function Slider({ wordStore }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [wordNumber, setwordNumber] = useState(0);
  const [wordLearned, setwordLearned] = useState([]);

  const nextSlide = () => {
    if (slideIndex !== wordStore.words.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === wordStore.words.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(wordStore.words.length);
    }
  };

  const wordAdd = (id) => {
    const array = [...wordLearned];
    array.push(id);
    let result = [];
    for (let str of array) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    setwordLearned(result);
    setwordNumber(result.length);
  };

  const elements = wordStore.words.map((word) => {
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
    <div className="game-word">выученных слов {wordNumber}/{wordStore.words.length}</div>
    </div>
  );
}

export default inject(['wordStore'])(observer(Slider));
