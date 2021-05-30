import '../Styles/Input.css'

const Input = (props) => {
  
  return (
    <div className="Input">
      <label className="label" htmlFor="input">Add files +</label>
      <input className="hidden-input" type="file" id="input" accept="application/pdf" multiple onChange={props.onChange} />
    </div>
  )
}

export default Input