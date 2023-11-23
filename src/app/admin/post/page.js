import CardAdmin from "@/components/CardAdmin"
import imagen1 from "@/public/assets/imagencard-1.jpg"
import imagen2 from "@/public/assets/imagencard-2.jpg"
import imagen3 from "@/public/assets/imgencard2.jpg"
function PostAdminPage() {
  return (
    <div className="body_blog">
            <h1 className="title_admin_page"> Agregar</h1>
            <div className="card_admin__container">
                <CardAdmin name="Publicar Libro" img={imagen1}/>
                <CardAdmin name="Escribir Entrada" img={imagen2}/>
                <CardAdmin name="Subir Multimedia" img={imagen3}/>
            </div>
        </div>
  )
}

export default PostAdminPage;