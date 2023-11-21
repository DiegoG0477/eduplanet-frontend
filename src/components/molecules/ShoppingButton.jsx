export default function ShoppingButton(props){
    return(
        <button style={{background:props.colorBackground}} className="shopping-button" onClick={props.onClick} >
            <span className={"material-symbols-outlined feature-icon"}>{props.spanText}</span>
            <p>{props.buttonText}</p>
        </button>
    )
}