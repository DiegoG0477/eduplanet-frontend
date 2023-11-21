"use client";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";
import Script from "next/script";
function layoutVideos({ children }) {
    return (
        <>
            <Nav background={"#80203D"}/>
            {children}
            
            <Footer />
        </>
    );
}

export default layoutVideos;
