import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState, useContext } from "react";
import { WordsContext } from './WordsApi.jsx';

function Row(props) {
  const [state, setState] = useState(props);
  const [pressed, setPressed] = useState(false);
  const [errors, setErrors] = useState({});
  const { editWords } = useContext(WordsContext);

  const checkValidation = () => {
    const newErrors = Object.keys(state).reduce((account, item) => {
      // eslint-disable-next-line default-case
      switch (item) {
        case "english":
        case "transcription":
        case "russian":
        case "tags":
          account = {
            ...account,
            [item]: state[item].trim().length > 0 ? undefined : "Пустое поле",
          };
          break;
      }
      return account;
    }, {});

    setErrors(newErrors);
  };

  const handleChangeSave = (event) => {
    event.preventDefault();
    checkValidation();
    if (state.english !== "" && state.transcription !== "" && state.russian !== "" && state.tags !== "") {
      setPressed(!pressed);
    }
    editWords(state);
  };

  const handleChangeEdit = (event) => {
    event.preventDefault();
    checkValidation();
    setPressed(!pressed);
  }

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    }
    
    checkValidation();
  };


  const handleChangeCansel = () => {
    setState({
      ...props,
    });
    setPressed(!pressed);
  };

  const ondelete = () => {
    props.onDelete(props.id);
  };

  return (
    <tr className="row">
      <td className="cell">
        {pressed ? (
          <input
            name="english"
            className={
              errors.english !== undefined ? "input-error" : "input-edit"
            }
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
            className={
              errors.transcription !== undefined ? "input-error" : "input-edit"
            }
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
            className={
              errors.russian !== undefined ? "input-error" : "input-edit"
            }
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
            className={
              errors.tags !== undefined ? "input-error" : "input-edit"
            }
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
            <button onClick={handleChangeSave} className="button-save">
              save
            </button>
            <button onClick={handleChangeCansel} className="button-save">
              cancel
            </button>
          </div>
        ) : (
          <div onClick={handleChangeEdit} className="icon-edit">
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
