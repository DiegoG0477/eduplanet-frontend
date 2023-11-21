import React from "react";
import MainSectionBanner from "@/components/MainSectionBanner";
import BannerImage from "@/public/assets/banner-store.png";
import BooksCollection from "@/components/BooksCollection";
import OffersSection from "@/components/OffersSection";
import BooksLibrary from "@/components/organisms/BooksLibrary";

export default function Store() {
    return (
        <>
            <MainSectionBanner
                acentColor="#203880"
                bannerImage={BannerImage}
                sectionName={"STORE"}
                sectionBannerQuestion={
                    "¿Te gustaría adquirir recursos de calidad para mejorar tu educación o la de tus alumnos?"
                }
                sectionDescription={`En la tienda online de Eduplanet podrás acceder a libros educativos, ediciones mejoradas, revisadas y actualizadas, mapas, guías para maestros, y  estudiantes de docencia. Todo, en formato digital y al mejor precio.`}
            />

            <BooksCollection collectionTitle="Lo más vendido" />

            {/* <BooksCollection collectionTitle="Estudiantes de docencia: Guías" /> */}

            {/* <OffersSection discount="20" /> */}

            <BooksCollection collectionTitle="Lo mejor para Primaria" />

            {/* <BooksCollection collectionTitle="Colección: Padres de Familia" /> */}

            <BooksLibrary />
        </>
    );
}
