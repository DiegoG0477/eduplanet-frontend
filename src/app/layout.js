import { Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Eduplanet",
    description: "Educación para todos",
};

export default function RootLayout({ children }) {
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
            <body className={inter.className}>{children}
            <Script
                src="https://kit.fontawesome.com/e020340de0.js"
                crossorigin="anonymous"
            />
            </body>
            
        </html>
    );
}
