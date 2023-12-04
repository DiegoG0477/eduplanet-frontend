import { Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {cookies} from 'next/headers'
import Nav from "@/components/organisms/Nav";
const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Eduplanet",
    description: "Educación para todos",
};

export default function RootLayout({ children }) {
    let logged;
    const cookiesList = cookies();

    if(cookiesList.has('token')){
        logged = true;
    }
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </head>
            <body className={inter.className}>
            <Nav logged={logged}/>
                {children}
                <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
                <Script
                    src="https://kit.fontawesome.com/e020340de0.js"
                    crossorigin="anonymous"
                />
            </body>
        </html>
    );
}
