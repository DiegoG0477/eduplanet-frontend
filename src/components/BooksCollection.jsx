import React from "react";
import "./styles.css";
import StoreCarouselCell from "./StoreCaroucelCell";
import Link from "next/link";

export default function BooksCollection(props) {
    return (
    <div className="collection-container">
      <div className="collection-head">
        <h2 className="collection-title">{props.collectionTitle}</h2>
        <Link href="/store">
          <h2 className="collection-title">
            Ver Más{" "}
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </h2>
        </Link>
      </div>

      <div className="carousel" data-flickity>
        <StoreCarouselCell page={1}/>
        <StoreCarouselCell page={2}/>
        {/* <StoreCarouselCell />
        <StoreCarouselCell /> */}
      </div>
    </div>
  );
}
