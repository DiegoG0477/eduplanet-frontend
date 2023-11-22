import React from "react";
import "../globals.css";
import BannerImage from "@/public/assets/banner-multimedia.png";
import MainSectionBanner from "@/components/MainSectionBanner";
import MultimediaCarousel from "@/components/organisms/MultimediaCarousel";
import Link from "next/link";

function MultimediaPage() {
    return (
        <div>
            <MainSectionBanner
                acentColor="#80203D"
                bannerImage={BannerImage}
                sectionName={"MULTIMEDIA"}
                sectionBannerQuestion={
                    "¿Te gustaría mejorar tus habilidades educativas?"
                }
                sectionDescription={`En los cursos de Eduplanet podrás acceder a contenidos de calidad, que te ayudarán a desarrollar competencias pedagógicas, didácticas, tecnológicas y personales. Los cursos están adaptados a diferentes niveles, desde inicial hasta avanzado, y a diferentes modalidades, desde presencial hasta online.`}
            />

            <div className="contain_videos">
                <div className="contain_text_video">
                    <h1 className="text_video_reciente">
                        Los vídeos más recientes
                    </h1>
                </div>
                <MultimediaCarousel />

                <div className="contain_text_video">
                    <h1 className="text_video_reciente">Videoblogs</h1>
                </div>
                <MultimediaCarousel />

                <div className="contain_text_video">
                    <h1 className="text_video_reciente">Guías</h1>
                </div>
                <MultimediaCarousel />

                {/* <Link href="/multimedia/all">
                        <h1
                            className="titulo_blog_page"
                            style={{ color: "#80203d" }}
                        >
                            TODOS LOS VIDEOS{" "}
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </h1>
                    </Link> */}
            </div>
        </div>
    );
}

export default MultimediaPage;
