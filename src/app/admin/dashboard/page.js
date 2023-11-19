import imagen1 from "@/public/assets/imagencard-1.jpg"
import imagen2 from "@/public/assets/imagencard-2.jpg"
import imagen3 from "@/public/assets/imgencard2.jpg"
import CardAdmin from "@/components/CardAdmin"
function DashboardPage() {
  return (
    <div>
        <div className="body_blog">
            <h1 className="title_admin_page"> Estadísticas </h1>
            <div className="card_admin__container">
                <CardAdmin name="Ventas" img={imagen1}/>
                <CardAdmin name="Interaciones" img={imagen2}/>
                <CardAdmin name="Resumen" img={imagen3}/>
            </div>
        </div>
    </div>
  )
}

export default DashboardPage