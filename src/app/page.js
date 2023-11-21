"use client";
import React from "react";
import Img from "next/image";
import imgBanner from "@/public/assets/science-education-concepts-banner-vector.jpg";
import "./globals.css";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import IndexStoreSection from "@/components/organisms/IndexStoreSection";
import IndexBlogSection from "@/components/organisms/IndexBlogSection";
import IndexMultimediaSection from "@/components/organisms/IndexMultimediaSection";

function HomePage() {
    return (
        <>
            <Nav />
            <div>
                <div className="banner">
                    <div className="oval yellow"></div>
                    <div className="oval green"></div>
                    <Img
                        src={imgBanner}
                        alt="image_banner"
                        className="imgBanner"
                    />
                </div>

                <IndexStoreSection />

                <IndexBlogSection />

                <IndexMultimediaSection />

                
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
