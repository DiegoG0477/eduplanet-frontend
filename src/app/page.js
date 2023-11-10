import React from 'react';
import Image from "next/image";
import imgBanner from "@/public/assets/science-education-concepts-banner-vector.jpg";
import "./globals.css";
import CardStore from "../components/CardsStore";
import CardBlog from "@/components/CardBlog";
import Img from "next/image";

function HomePage() {
    return (
        <div>
            <div className="banner">
                <div className="oval yellow"></div>
                <div className="oval green"></div>
                <Image src={imgBanner} alt="image_banner" className="imgBanner" />
            </div>

            <div className="contain_section">
                <div className="title_section store">
                    <Img src={imgBanner} alt={""} className="title_logo"/>
                    <div className="title_store">
                        <h3 className="text_title">STORE</h3>
                    </div>
                </div>
                <div className="contain_store">
                    <CardStore
                        image={imgBanner}
                        titulo="La guia Santillana 1"
                        precio="$265.87"
                    />
                    <CardStore
                        image={imgBanner}
                        titulo="La guia Santillana 2"
                        precio="$265.87"
                    />
                    <CardStore
                        image={imgBanner}
                        titulo="La guia Santillana 3"
                        precio="$265.87"
                    />
                    <CardStore
                        image={imgBanner}
                        titulo="La guia Santillana 4"
                        precio="$265.87"
                    />

                </div>
                <div className="button_section store">
                    <h1 className="text_button_section">ver mas</h1>
                </div>
            </div>

            <div className="contain_section">
                <div className="title_section blogs">
                    <Img src={imgBanner} alt={""} className="title_logo"/>
                    <div className="title_store">
                        <h3 className="text_title">BLOGS</h3>
                    </div>
                </div>
                <div className="contain_blogs">
                    <CardBlog
                        image={imgBanner}
                        titulo="La guia Santillana 4"
                        detalles="Flor furgiuele | 9 octubre, 2023 | Blog"
                        descripcion="Dedicar nuestra vida a la docencia, es mucho más que transmitir conocimientos. En realidad, es un estilo de vida que conlleva practicar constantemente la observación, la empatía, la buena comunicación y que nos impulsa a ser entusiastas y creadores constantes."

                    />
                    <CardBlog
                        image={imgBanner}
                        titulo="La guia Santillana 4"
                        detalles="Flor furgiuele | 9 octubre, 2023 | Blog"
                        descripcion="Dedicar nuestra vida a la docencia, es mucho más que transmitir conocimientos. En realidad, es un estilo de vida que conlleva practicar constantemente la observación, la empatía, la buena comunicación y que nos impulsa a ser entusiastas y creadores constantes."

                    />
                    <CardBlog
                        image={imgBanner}
                        titulo="La guia Santillana 4"
                        detalles="Flor furgiuele | 9 octubre, 2023 | Blog"
                        descripcion="Dedicar nuestra vida a la docencia, es mucho más que transmitir conocimientos. En realidad, es un estilo de vida que conlleva practicar constantemente la observación, la empatía, la buena comunicación y que nos impulsa a ser entusiastas y creadores constantes."

                    />
                </div>
                <div className="button_section blogs">
                    <h1 className="text_button_section">ver mas</h1>
                </div>
            </div>

            <div className="contain_section">
                <div className="title_section cursos">
                    <Img src={imgBanner} alt={""} className="title_logo"/>
                    <div className="title_store">
                        <h3 className="text_title">CURSOS</h3>
                    </div>
                </div>
                <div className="contain_cursos">
                    carrusel
                </div>
                <div className="button_section cursos">
                    <h1 className="text_button_section">ver mas</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
