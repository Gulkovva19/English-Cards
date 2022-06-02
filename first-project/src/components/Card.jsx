import React, {useState, useRef, useEffect} from "react";

function Card(props) {
    const [pressed, setPressed] = useState(false);
    const btnRef = useRef();

    useEffect(()=>{
      btnRef.current.focus();
    }, []);


    const handleChange = () => {
        setPressed(!pressed);
        props.wordAdd(props.id);
        console.log(btnRef.current);
      }

  return (
    <div className="card">
      <div className="card-english">{props.english}</div>
      <div className="card-transcription">{props.transcription}</div>
      <div className="button-show-container" onClick = {handleChange}>{pressed ? <div>{props.russian}</div> : <button ref={btnRef} className="button-show">SHOW</button>}</div>
    </div>
  );
}

export default Card;
