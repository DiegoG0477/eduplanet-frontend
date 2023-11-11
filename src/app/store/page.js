import React from "react";
import MainSectionBanner from "@/components/MainSectionBanner";
import BannerImage from "@/public/assets/banner-store.png";
import BooksCollection from "@/components/BooksCollection";
import OffersSection from "@/components/OffersSection";

export default function Store() {
  return (
    <>
      <MainSectionBanner acentColor="#203880" bannerImage={BannerImage} />

      <BooksCollection collectionTitle="Lo más vendido" />

      <BooksCollection collectionTitle="Estudiantes de docencia: Guías" />

      <OffersSection discount="20" />

      <BooksCollection collectionTitle="Lo mejor para Primaria" />

      <BooksCollection collectionTitle="Colección: Padres de Familia" />
    </>
  );
}
