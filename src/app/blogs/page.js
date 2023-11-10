import BannerBlog from "@/components/BannerBlog"
import Img from "next/image"
import imagen from "@/public/assets/card-example.jpg"
import CardBlog from "@/components/CardBlog"
function blogPage() {
  return (
    <div className="blog_page__container">
        <BannerBlog/>
        <div className="body_blog">
            <h1 className="title_blog_page">Nota del día</h1>
            <div className="img_blog_container">
                <Img src={imagen} alt="imagen" className="img_blog_page"/>
                <h1 className="text_img_blog">El ABC de la comunicación eficaz entre familias y escuelas</h1>
            </div>
            <h1 className="titulo_blog_page">Los Artículos Más Recientes</h1>
            <div className="recient_blog__container">
                <CardBlog/>
                <CardBlog/>
                <CardBlog/>
            </div>
            <h1 className="titulo_blog_page">Selección del Editor</h1>
            <div className="recient_blog__container">
                <CardBlog/>
                <CardBlog/>
                <CardBlog/>
            </div>
        </div>
    </div>
  )
}

export default blogPage