import Img from "next/image";
import "@/components/Styles.css";


export default function JobCard(props) {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="store_card">
                <div className="cont_imagen">
                    <Img src={props.image}  className="imagen_card_store" alt="" />
                </div>
                <div className="card_store_footer">
                    <h5>{props.titulo}</h5>
                    <div className="contain_precio">
                        <span className="material-symbols-outlined info"> add_shopping_cart</span>
                        <span className="material-symbols-outlined info">info</span>
                        <h3 className="store_precio">{props.precio}</h3>
                    </div>
                </div>

            </div>
        </>
    );
}
