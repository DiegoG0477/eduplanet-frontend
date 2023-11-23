import CardAdmin from "@/components/CardAdmin";
import imagen1 from "@/public/assets/imagencard-1.jpg";
import imagen2 from "@/public/assets/imagencard-2.jpg";
import imagen3 from "@/public/assets/imgencard2.jpg";
import Link from "next/link";
function HomeAdminPage() {
    return (
        <div>
            <div className="body_blog">
                <h1 className="title_admin_page"> Administración</h1>
                <div className="card_admin__container">
                    <Link href="/admin/post">
                        <CardAdmin name="Agregar" img={imagen1} />
                    </Link>
                    <Link href="/admin/change">
                        <CardAdmin name="Editar" img={imagen2} />
                    </Link>
                    {/* <CardAdmin name="Estadísticas" img={imagen3}/> */}
                </div>
            </div>
        </div>
    );
}

export default HomeAdminPage;
