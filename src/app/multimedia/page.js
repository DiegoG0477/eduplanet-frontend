import React from 'react';
import "../globals.css";
import Image from "next/image";
import imgBanner from "@/public/assets/science-education-concepts-banner-vector.jpg";
import Img from "next/image";


function MultimediaPage() {
    return (
        <div>
            <div className="multimedia_banner">
                <div className="contain_logo_title">
                    <Img src={imgBanner} alt={""} className="multimedia_logo_banner"/>
                    <div className="title_multimedia">
                        <h3 className="title_multimedia_text">MULTIMEDIA</h3>
                    </div>
                </div>

                <div className="contain_img_text">
                        <Img src={imgBanner} alt={""} className="multimedia_img_banner"/>


                    <div className="contain_text_multimedia">
                        <h1 className="multimedia_title">¿Te gustaría mejorar tus habilidades educativas?</h1>
                        <p className="multimedia_text">En los cursos de Eduplanet podrás acceder a contenidos de calidad, que te ayudarán a desarrollar competencias pedagógicas, didácticas, tecnológicas y personales. Los cursos están adaptados a diferentes niveles, desde inicial hasta avanzado, y a diferentes modalidades, desde presencial hasta online.</p>
                    </div>
                </div>
            </div>
            <div className="contain_videos">
                <div className="contain_text_video">
                    <h1 className="text_video_reciente">Los vídeos más recientes</h1>
                </div>
                <div className="contain_carrusel">
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                </div>
                <div className="contain_text_video">
                    <h1 className="text_video_reciente">Videoblogs</h1>
                </div>
                <div className="contain_carrusel">
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                </div>
                <div className="contain_text_video">
                    <h1 className="text_video_reciente">Guías</h1>
                </div>
                <div className="contain_carrusel">
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                    <Img src={imgBanner} alt={""} className="img_carrusel"/>
                </div>
            </div>
        </div>
    );
}

export default MultimediaPage;
