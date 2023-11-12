import "./styles.css"
function TextAreaInput(props) {
  return (
    <textarea placeholder={props.holder} className="textarea_input"/>
  )
}

export default TextAreaInput