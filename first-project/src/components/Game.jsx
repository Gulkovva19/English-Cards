import Slider from "./Slider.jsx";
import { useContext } from 'react';
import { WordsContext } from './WordsApi.jsx';


function Game() {
  const data = useContext(WordsContext);
  return (
    <div className="game">
      <Slider words={data.wordsList}/>
    </div>
  );
}

export default Game;
