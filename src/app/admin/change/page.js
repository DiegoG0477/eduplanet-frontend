import CardAdmin from "@/components/CardAdmin"
import imagen1 from "@/public/assets/imagencard-1.jpg"
import imagen2 from "@/public/assets/imagencard-2.jpg"
import imagen3 from "@/public/assets/imgencard2.jpg"
import Link from "next/link"
function ChangeAdminPage() {
  return (
    <div className="body_blog">
            <h1 className="title_admin_page"> Modificar</h1>
            <div className="card_admin__container">
            <Link href="/store/all/admin"><CardAdmin name="Editar Publicación" img={imagen1}/></Link>
                <Link href="/blogs/all/admin"><CardAdmin name="Editar Artículo" img={imagen2}/></Link>
                
{/*                 
                <CardAdmin name="Editar Recurso" img={imagen3}/> */}
            </div>
    </div>
  )
}

export default ChangeAdminPage