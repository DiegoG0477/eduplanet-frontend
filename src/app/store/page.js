import React from "react";
import Img from "next/image";
import MainSectionBanner from "@/components/MainSectionBanner";
import BannerImage from "@/public/assets/banner-store.png";

export default function Store(){
    return (
        <>
            <MainSectionBanner 
            acentColor='#203880'
            bannerImage={BannerImage}/>
        </>
    )
}