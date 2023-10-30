import React from "react";
import "./styles.css";
import BannerImage from "@/public/assets/banner-store.png";
//carousel example https://codepen.io/Schepp/pen/WNbQByE
import StoreCarouselCell from "./StoreCaroucelCell";
import Link from "next/link";
//usar paginaciones en la API del backend

export default function BooksCollection(props) {
  return (
    <div className="collection-container">
      <div className="collection-head">
        <h2 className="collection-title">{props.collectionTitle}</h2>
        <Link href="/store">
          <h2 className="collection-title">
            Ver Más{" "}
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </h2>
        </Link>
      </div>

      <div className="carousel" data-flickity>
        <StoreCarouselCell />
        <StoreCarouselCell />
        <StoreCarouselCell />
        <StoreCarouselCell />
      </div>
    </div>
  );
}
