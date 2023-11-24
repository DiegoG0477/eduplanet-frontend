import "./styles.css"
function TextAreaInput(props) {
  return (
    <textarea style={props.style} placeholder={props.holder} className="textarea_input" value={props.value} onChange={props.fun} name={props.name}/>
  )
}

export default TextAreaInput