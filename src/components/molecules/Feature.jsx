export default function Feature(props){
    return(
        <div className="feature">
            <span class={"material-symbols-outlined feature-icon"}>{props.spanText}</span>
            <p>{props.featureText}</p>
        </div>
    )
}