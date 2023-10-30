
import React from "react";
import MainSectionBanner from "@/components/MainSectionBanner";
import BannerImage from "@/public/assets/banner-store.png";
import BooksCollection from "@/components/BooksCollection";

export default function Store(){
    return (
        <>
            <MainSectionBanner 
            acentColor='#203880'
            bannerImage={BannerImage}/>

            <BooksCollection
            collectionTitle='Lo más vendido'/>
        </>
    )
}