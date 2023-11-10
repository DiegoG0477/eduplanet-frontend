import BannerBlog from "@/components/BannerBlog"
import Img from "next/image"
import imagen from "@/public/assets/card-example.jpg"
function blogPage() {
  return (
    <div>
        <BannerBlog/>
        <div className="body_blog">
            <h1 className="title_blog_page">Nota del día</h1>
            <div className="img_blog_container">
                <Img src={imagen} alt="imagen" className="img_blog_page"/>
                <h1 className="text_img_blog">El ABC de la comunicación eficaz entre familias y escuelas</h1>
            </div>
        </div>
    </div>
  )
}

export default blogPage