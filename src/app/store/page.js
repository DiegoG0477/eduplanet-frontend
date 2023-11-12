import React from "react";
import MainSectionBanner from "@/components/MainSectionBanner";
//import BannerImage from "@/public/assets/banner-store.png";
import BooksCollection from "@/components/BooksCollection";
import OffersSection from "@/components/OffersSection";
import BooksLibrary from "@/components/organisms/BooksLibrary";

export default function Store() {
    return (
        <>
            <MainSectionBanner acentColor="#203880"  />

            <BooksCollection collectionTitle="Lo más vendido" />

            <BooksCollection collectionTitle="Estudiantes de docencia: Guías" />

            <OffersSection discount="20" />

            <BooksCollection collectionTitle="Lo mejor para Primaria" />

            <BooksCollection collectionTitle="Colección: Padres de Familia" />

            <BooksLibrary />
        </>
    );
}
