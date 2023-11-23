export default function Feature(props) {
    return (
        <div className="feature">
            <span className={"material-symbols-outlined feature-icon"}>
                {props.spanText}
            </span>

            {props.bookInput ? (
                <input
                    type={props.type}
                    name={props.name}
                    className="book-feature-input"
                    placeholder={props.placeholder}
                    onChange={props.method}
                    value={props.value}
                />
            ) : (
                <p>{props.featureText}</p>
            )}
        </div>
    );
}
