import React from "react";
import "./styles.css";
import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";

export default function MainSectionBanner(props) {
  return (
    <div
      className="main-section-banner"
      style={{ background: props.acentColor }}
    >
      <div className="msb-head">
        <Img className="msb-logo" src={eduplanetLogo} alt="eduplanet-logo" />
        <div className="line-up"></div>
        <h2 className="msb-title-section">STORE</h2>
      </div>

      <div className="msb-body">
        <Img src={props.bannerImage} className="img-msb-body"/>
        <div className="content-msb-body">
            <h2>¿Te gustaría adquirir recursos de calidad para mejorar tu educación o la de tus alumnos?</h2>
            <p>En la tienda online de Eduplanet podrás acceder a libros educativos, ediciones mejoradas, revisadas y actualizadas, mapas, guías para maestros, y  estudiantes de docencia. Todo, en formato digital y al mejor precio.</p>
        </div>
      </div>
    </div>
  );
}
