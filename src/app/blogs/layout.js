<<<<<<< HEAD
"use client";
import Nav from "@/components/organisms/Nav";
import "../globals.css";
import Script from "next/script";
import Footer from "@/components/organisms/Footer";

import "@/components/styles.css";

function BlogSectionLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
            <Script
                src="https://kit.fontawesome.com/e020340de0.js"
                crossorigin="anonymous"
            />
            <Footer />
        </>
    );
}

export default BlogSectionLayout;
=======
import Nav from "@/components/organisms/Nav"
function StoreLayout({ children }) {
  return (
    <>
      <body>
        { <Nav/> }
        {children}
      </body>
    </>
  );
}

export default StoreLayout;
>>>>>>> feature-d
