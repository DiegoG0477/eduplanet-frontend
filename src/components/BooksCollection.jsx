import React from "react";
import "./styles.css";
import Flickity from 'react-flickity-component'
import BannerImage from "@/public/assets/banner-store.png";
import Img from "next/image";
//carousel example https://codepen.io/Schepp/pen/WNbQByE

const flickityOptions = {
    initialIndex: 2
}

export default function BooksCollection(props) {
  return (
    <div className="collection-container">
      <h2 className="collection-title">{props.collectionTitle}</h2>

    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        <div>
            <p>ola mubdi</p>
            <Img src={BannerImage}/>
        </div>
        <div>
            <p>ola mubdi</p>
            <Img src={BannerImage}/>
        </div>
        <div>
            <p>ola mubdi</p>
            <Img src={BannerImage}/>
        </div>
    </Flickity>
  

    </div>
  );
}
