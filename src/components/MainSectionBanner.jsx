import React from "react";
import "./styles.css";
import SectionTitle from "./organisms/SectionTitle";
import Img from "next/image";

export default function MainSectionBanner(props) {
  return (
    <div
      className="main-section-banner"
      style={{ background: props.acentColor }}
    >
      <SectionTitle sectionName={props.sectionName} />
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
