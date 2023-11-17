import Img from "next/image";
import imagen from "@/public/assets/no-visible.png";
function InputForm(props) {
    return (
        <div className="inputForm__container">
            {props.id == 1 ? (
                <div className="password__container">
                    <input
                        type={props.type}
                        name={props.name}
                        placeholder={props.place}
                        className="input_form"
                        onChange={(event) => {
                            props.method(event.target.value);
                        }}
                    />
                    <Img
                        src={imagen}
                        alt="ocultar"
                        className="imagen_password"
                    />
                </div>
            ) : (
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.place}
                    className="input_form"
                    onChange={(event) => {
                        props.method(event.target.value);
                    }}
                />
            )}
        </div>
    );
}

export default InputForm;
