
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Row(props) {
  return (
    <tr className="row">
      <td className="cell">{props.isEdit ? <input className="input-edit" value={props.english}></input> : props.english}</td>
      <td className="cell">{props.isEdit ? <input className="input-edit" value={props.transcription}></input> : props.transcription}</td>
      <td className="cell">{props.isEdit ? <input className="input-edit" value={props.russian}></input> : props.russian}</td>
      <td className="cell">{props.isEdit ? <input className="input-edit" value={props.tags}></input> : props.tags}</td>
      <td className="cell-action">
        {props.isEdit ? <div className="button-container"><button className="button-save">Save</button><button className="button-save">Cansel</button></div> : <div className="icon-edit"><EditOutlined /></div>}
      </td>
      <td className="cell-action">
        <div className="icon-edit"><DeleteOutlined /></div>
      </td>
    </tr>
  );
}

export default Row;
