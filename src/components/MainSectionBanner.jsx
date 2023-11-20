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
        <h2 className="msb-title-section">{props.sectionName}</h2>
      </div>

      <div className="msb-body">
        <Img src={props.bannerImage} className="img-msb-body"/>
        <div className="content-msb-body">
            <h2>{props.sectionBannerQuestion}</h2>
            <p>{props.sectionDescription}</p>
        </div>
      </div>
    </div>
  );
}
