function InputForm(props) {
  return (
        <div className="inputForm__container">
            <input type={props.type} name={props.name} method={props.fun} placeholder={props.place} className="input_form"/>
        </div>  
  )
}

export default InputForm