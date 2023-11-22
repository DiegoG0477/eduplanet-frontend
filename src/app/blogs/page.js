import Img from "next/image";
import imagen from "@/public/assets/card-example.jpg";
import MainSectionBanner from "@/components/MainSectionBanner";
import BannerImage from "@/public/assets/banner-blog.jpg";
import CardBlogs from "@/components/CardsBlogs";
import Link from "next/link";

function blogPage() {
    return (
        <div>
            <MainSectionBanner
                acentColor="#20802A"
                bannerImage={BannerImage}
                sectionName={"BLOGS"}
                sectionBannerQuestion={
                    "¿Te gustaría aprender más sobre educación?"
                }
                sectionDescription={`En este blog encontrarás artículos con consejos, tops y recursos
                para docentes y padres de familia que quieren mejorar su práctica
                educativa. Encontrarás conocimientos y experiencias sobre temas
                como: estrategias didácticas, innovación educativa, tecnología
                educativa, educación emocional, juegos educativos y mucho más.`}
            />
            <div className="body_blog">
                <h1 className="title_blog_page">Nota del día</h1>
                <div className="img_blog_container">
                    <Img src={imagen} alt="imagen" className="img_blog_page" />
                    <h1 className="text_img_blog">
                        El ABC de la comunicación eficaz entre familias y
                        escuelas
                    </h1>
                </div>
                <CardBlogs/>

                {/* <Link href="/blogs/all">
                        <h1
                            className="titulo_blog_page"
                            style={{ color: "#144729" }}
                        >
                            TODOS LOS ARTÍCULOS{" "}
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </h1>
                    </Link> */}
            </div>
        </div>
    );
}

export default blogPage;
