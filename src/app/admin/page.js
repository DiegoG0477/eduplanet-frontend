import CardAdmin from "@/components/CardAdmin"
import imagen1 from "@/public/assets/imagencard-1.jpg"
import imagen2 from "@/public/assets/imagencard-2.jpg"
import imagen3 from "@/public/assets/imgencard2.jpg"
function HomeAdminPage() {
  return (
    <div>
        <div className="body_blog">
            <h1 className="title_admin_page"> Administración</h1>
            <div className="card_admin__container">
                <CardAdmin name="Agregar" img={imagen1}/>
                <CardAdmin name="Editar" img={imagen2}/>
                <CardAdmin name="Estadísticas" img={imagen3}/>
            </div>
        </div>
    </div>
  )
}

export default HomeAdminPage