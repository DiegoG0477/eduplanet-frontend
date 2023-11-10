import Img from "next/image";
import "@/components/Styles.css";


export default function CardBlog(props) {

    return (
        <>
          <div className="blogs_card">
            <div className="blog_imagen">
                <Img src={props.image}  className="imagen_card_blog" alt="" />
            </div>
            <div className="card_blog_footer">
                <h5 className="blog_titulo">{props.titulo}</h5>
                <div className="blog_detalles">
                <h5 className="detalles_text">{props.detalles}</h5>
                </div>
                <p className="descripcion_text">{props.descripcion}</p>

            </div>

          </div>
        </>
    );
}
