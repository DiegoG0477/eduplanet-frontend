import Img from "next/image";
import prueba from "@/public/assets/card-example.jpg";
import DatosCardBlog from "./DatosCardBlog";
function CardBlog(props) {
    return (
        <div className="card_blog__container" style={props.style}>
            <Img src={prueba} alt="prueba" className="image_card_blog" />
            
            <div className="card-blog-data">
                <h2 className="title_card_blog">
                    El ABC de la comunicación eficaz entre familias y escuelas
                </h2>
                <div className="datos_card_component">
                    <DatosCardBlog />
                </div>
                <p className="text_card_footer">
                    La comunicación entre hogares y escuelas es un factor clave
                    para el bienestar de los niños y las niñas, así como para el
                    éxito de su proceso educativo.
                </p>
            </div>
        </div>
    );
}

export default CardBlog;
