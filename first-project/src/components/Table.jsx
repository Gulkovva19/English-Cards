import Row from "./Row.jsx";
import React, { useState, useEffect, useContext } from "react";
import { WordsContext } from './WordsApi.jsx';

function Table () {
  const { words, deleteWords } = useContext(WordsContext);
  const [wordCollection, setwordCollection] = useState(words);

  useEffect(() => {
    setwordCollection(words);
  }, [words]);

  const onDelete = (id) => {
    deleteWords(id);
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

