import Row from "./Row.jsx";
import { observer, inject } from 'mobx-react';

function Table ({ wordStore }) {

  const onDelete = (id) => {
    wordStore.deleteWords(id);
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
        {wordStore.words.map((word, index) => (
          <Row index={index} key={word.id} word={word} onDelete={onDelete}></Row>
        ))}
      </tbody>
    </table>
  );
}

export default inject(['wordStore'])(observer(Table));

