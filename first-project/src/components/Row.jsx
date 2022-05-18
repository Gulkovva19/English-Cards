
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, {useState} from "react";

function Row(props) {

const [pressed, setPressed] = useState(false);
const [textEnglish, setEnglish] = useState(props.english); 
const [textTranscription, setTranscription] = useState(props.transcription);
const [textRussian, setRussian] = useState(props.russian);
const [textTags, setTags] = useState(props.tags);

const handleChange = () => {
  setPressed(!pressed);
}

const changeEnglish = (event) => {
  setEnglish(event.target.value);
}

const changeTranscription = (event) => {
  setTranscription(event.target.value);
}

const changeRussian = (event) => {
  setRussian(event.target.value);
}

const changeTags = (event) => {
  setTags(event.target.value);
}

  return (
    <tr className="row">
      <td className="cell">{pressed ? <input name="english" className="input-edit" value={textEnglish} onChange={changeEnglish}></input> : props.english}</td>
      <td className="cell">{pressed ? <input name="transcription" className="input-edit" value={textTranscription} onChange={changeTranscription}></input> : props.transcription}</td>
      <td className="cell">{pressed ? <input name="russian" className="input-edit" value={textRussian} onChange={changeRussian}></input> : props.russian}</td>
      <td className="cell">{pressed ? <input name="tags" className="input-edit" value={textTags} onChange={changeTags}></input> : props.tags}</td>
      <td className="cell-action">
        {pressed ? <div className="button-container"><button className="button-save">save</button><button onClick = {handleChange} className="button-save">cansel</button></div> : <div onClick = {handleChange} className="icon-edit"><EditOutlined/></div>}
      </td>
      <td className="cell-action">
        <div className="icon-edit"><DeleteOutlined/></div>
      </td>
    </tr>
  );
}

export default Row;
