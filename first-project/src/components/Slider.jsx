import Card from "./Card.jsx";
import React, { useState, useContext} from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { WordsContext } from './WordsApi.jsx';


function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [wordNumber, setwordNumber] = useState(0);
  const [wordLearned, setwordLearned] = useState([]);
  const { words } = useContext(WordsContext);

  const nextSlide = () => {
    if (slideIndex !== words.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === words.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(words.length);
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

  const elements = words.map((word) => {
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
    <div className="game-word">выученных слов {wordNumber}/{words.length}</div>
    </div>
  );
}

export default Slider;
