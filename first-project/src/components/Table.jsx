import Row from "./Row.jsx";
import React, { useState } from "react";
import wordsJson from '../resources/wordsJson.json';


function Table() {
  const [wordCollection, setwordCollection] = useState(wordsJson);

  const onDelete = (index) => {
    console.log(index);
    const array = [...wordCollection];
    array.splice(index, 1);
    setwordCollection(array);
  };


  return (
    <table className="table">
      <thead>
        <tr className="row-main">
          <th className="cell-main">English</th>
          <th className="cell-main">Transcription</th>
          <th className="cell-main">Russian</th>
          <th className="cell-main">Tags</th>
          <th className="cell-main-action">Edit</th>
          <th className="cell-main-action">Delete</th>
        </tr>
      </thead>
      <tbody>
        {wordCollection.map((word, index) => (
          <Row index={index} key={word.id} {...word} onDelete={onDelete}></Row>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
