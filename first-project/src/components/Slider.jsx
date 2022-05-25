import Card from "./Card.jsx";
import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import wordsJson from '../resources/wordsJson.json';


function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

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

  const elements = wordsJson.map((word) => {
    const { id, ...wordProps } = word;
    return <Card key={id} id={id} {...wordProps} />;
  });

  return (
    <div className="game-container">
      <button className="game-button" onClick={prevSlide}>
        <LeftOutlined />
      </button>
      <div>{elements[slideIndex - 1]}</div>
      <button className="game-button" onClick={nextSlide}>
        <RightOutlined />
      </button>
    </div>
  );
}

export default Slider;
