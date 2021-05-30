import '../Styles/FileName.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const FileName = (props) => {
  
  return (
    <div className="FileName" draggable="true">
      <p className="file-name-list-item">{props.name}</p>
      <FontAwesomeIcon icon={faTrash} className="file-remove-button" onClick={props.onClick} values={props.value} />
      {/* <button className="file-remove-button" onClick={props.onClick} value={props.value}>X</button> */}
    </div>
  )
}

export default FileName