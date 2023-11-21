import Img from "next/image";
import prueba from "@/public/assets/card-example.jpg";
import DatosCardBlog from "./DatosCardBlog";
function CardBlog(props) {
    let contenido = props.contenido.length;
    let si=props.contenido;
    if (contenido > 170) {
        si = props.contenido.slice(0, 172) + "...";
    }
    return (
        <div className="card_blog__container">
            <Img src={props.imagen} alt="prueba" className="image_card_blog" width={500} height={500} />
            
            <div className="card-blog-data">
                <h2 className="title_card_blog">
                    {props.titulo}
                </h2>
                <div className="datos_card_component">
                    <DatosCardBlog fecha={props.fecha} creado={props.creado}/>
                </div>
                <p className="text_card_footer">
                    {si}
                </p>
            </div>
        </div>
    );
}

export default CardBlog;
