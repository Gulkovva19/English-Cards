import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";

function Row(props) {
  const [state, setState] = useState(props);
  const [pressed, setPressed] = useState(false);
  const [errorEnglish, setErrorEnglish] = useState(false);
  const [errorTranscription, setErrorTranscription] = useState(false);
  const [errorRussian, setErrorRussian] = useState(false);
  const [errorTags, setErrorTags] = useState(false);

  const handleChange = () => {
    if (state.english === "") {
      setErrorEnglish(true);
    }
    if (state.transcription === "") {
      setErrorTranscription(true);
    }
    if (state.russian === "") {
      setErrorRussian(true);
    }
    if (state.tags === "") {
      setErrorTags(true);
    }
    if (state.english !== "" && state.transcription !== "" && state.russian!== "" && state.tags !== "") {
      setPressed(!pressed);
    }
  };

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });

    if (state.english !== "") {
      setErrorEnglish(false);
    }
    if (state.transcription !== "") {
      setErrorTranscription(false);
    }
    if (state.russian !== "") {
      setErrorRussian(false);
    }
    if (state.tags !== "") {
      setErrorTags(false);
    }
  };

  const handleChangeCansel = () => {
    setState({
      ...props,
    });
    setPressed(!pressed);
    setErrorEnglish(false);
    setErrorTranscription(false);
    setErrorRussian(false);
    setErrorTags(false);
  };

  const ondelete = () => {
    props.onDelete(props.index);
  };

  return (
    <tr className="row">
      <td className="cell">
        {pressed ? (
          <input
            name="english"
            className={errorEnglish ? "input-error" : "input-edit"}
            data-name={"english"}
            value={state.english}
            onChange={handleChangeInput}
          ></input>
        ) : (
          state.english
        )}
      </td>
      <td className="cell">
        {pressed ? (
          <input
            name="transcription"
            className={errorTranscription ? "input-error" : "input-edit"}
            data-name={"transcription"}
            value={state.transcription}
            onChange={handleChangeInput}
          ></input>
        ) : (
          state.transcription
        )}
      </td>
      <td className="cell">
        {pressed ? (
          <input
            name="russian"
            className={errorRussian ? "input-error" : "input-edit"}
            data-name={"russian"}
            value={state.russian}
            onChange={handleChangeInput}
          ></input>
        ) : (
          state.russian
        )}
      </td>
      <td className="cell">
        {pressed ? (
          <input
            name="tags"
            className={errorTags ? "input-error" : "input-edit"}
            data-name={"tags"}
            value={state.tags}
            onChange={handleChangeInput}
          ></input>
        ) : (
          state.tags
        )}
      </td>
      <td className="cell-action">
        {pressed ? (
          <div className="button-container">
            <button onClick={handleChange} className="button-save">
              save
            </button>
            <button onClick={handleChangeCansel} className="button-save">
              cansel
            </button>
          </div>
        ) : (
          <div onClick={handleChange} className="icon-edit">
            <EditOutlined />
          </div>
        )}
      </td>
      <td className="cell-action">
        <div className="icon-edit" onClick={ondelete}>
          <DeleteOutlined />
        </div>
      </td>
    </tr>
  );
}

export default Row;
