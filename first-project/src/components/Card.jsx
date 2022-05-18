import React, {useState} from "react";

function Card(props) {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
      }

  return (
    <div className="card">
      <div className="card-english">{props.english}</div>
      <div className="card-transcription">{props.transcription}</div>
      <div className="button-show-container" onClick = {handleChange}>{pressed ? <div>{props.russian}</div> : <button className="button-show">SHOW</button>}</div>
    </div>
  );
}

export default Card;
