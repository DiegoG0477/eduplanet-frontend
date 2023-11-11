import Img from "next/image";
import prueba from "@/public/assets/card-example.jpg";
import DatosCardBlog from "./DatosCardBlog";
function CardBlog() {
  return (
    <div className="card_blog__container">
      <Img src={prueba} alt="prueba" className="image_card_blog" />
      <p className="text_card_blog">
        El ABC de la comunicación eficaz entre familias y escuelas
      </p>
      <div className="datos_card_component">
        <DatosCardBlog />
      </div>
      <p className="text_card_footer">
        La comunicación entre hogares y escuelas es un factor clave para el
        bienestar de los niños y las niñas, así como para el éxito de su proceso
        educativo.
      </p>
    </div>
  );
}

export default CardBlog;
