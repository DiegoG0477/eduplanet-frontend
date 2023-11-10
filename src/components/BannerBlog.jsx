import Img from "next/image";
import logo from "@/public/assets/logo-png-w.png";
import banner from "@/public/assets/banner-blog.jpg";
import "./styles.css";
function BannerBlog() {
  return (
    <div className="banner__container">
      <div className="titles_banner">
        <Img
          src={logo}
          alt="logo"
          width={280}
          height={90}
          className="img_logo"
        />
        <div className="line_banner"></div>
        <h1 className="title_banner">BLOGS</h1>
      </div>
      <div className="part_down">
        <Img
          src={banner}
          alt="banner"
          width={1000}
          height={425}
          className="img_banner"
        />
        <div className="texts_banner">
          <h1 className="title_banner_question">¿Te gustaría aprender más sobre educación?</h1>
          <p className="text_banner_content">
            En este blog encontrarás artículos con consejos, tops y recursos
            para docentes y padres de familia que quieren mejorar su práctica
            educativa. Encontrarás conocimientos y experiencias sobre temas
            como: estrategias didácticas, innovación educativa, tecnología
            educativa, educación emocional, juegos educativos y mucho más.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerBlog;
