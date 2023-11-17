function ButtonForm(props) {
  return (
    <div className="button__container">
      <button className="button_form" onClick={props.method}>{props.text}</button>
    </div>
  )
}

export default ButtonForm