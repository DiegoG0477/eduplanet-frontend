import Img from "next/image";

export default function BookCardButton(props){
    return(
        <button className="icon-button"><span className={"material-symbols-outlined icon " + props.iconClass}>{props.icon}</span></button>
    );
}