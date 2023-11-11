"use client";
// import Nav from "@/components/Nav";
import "@/app/globals.css";
import Script from "next/script";
function StoreLayout({ children }) {
  return (
    <>
      <body>
        {/* <Nav/> */}
        {children}
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
      </body>
    </>
  );
}

export default StoreLayout;
