import "../assets/styles/base.scss";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Row(props) {
  return (
    <div className="row">
      <div className="cell">{props.isEdit ? <input className="input-edit" value={props.english}></input> : props.english}</div>
      <div className="cell">{props.isEdit ? <input className="input-edit" value={props.transcription}></input> : props.transcription}</div>
      <div className="cell">{props.isEdit ? <input className="input-edit" value={props.russian}></input> : props.russian}</div>
      <div className="cell">{props.isEdit ? <input className="input-edit" value={props.tags}></input> : props.tags}</div>
      <div className="cell-action">
        {props.isEdit ? <div className="button-container"><button className="button-save">Save</button><button className="button-save">Cansel</button></div> : <div className="icon-edit"><EditOutlined /></div>}
      </div>
      <div className="cell-action">
        <div className="icon-edit"><DeleteOutlined /></div>
      </div>
    </div>
  );
}

export default Row;
