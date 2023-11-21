"use client";
import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";
import Link from "next/link";
import "../styles.css";
export default function Nav(props) {
    const goStore = () => {
        window.location.href = "/store";
    };

    const goMultimedia = () => {
        window.location.href = "/multimedia";
    }

    const goBlogs = () => {
        window.location.href = "/blogs";
    }

    return (
        <div className="nav" >
            <Link href="/">
                <Img src={eduplanetLogo} className="nav-logo" />
            </Link>
            <div className="nav-links">
                <ul>
                    <Link href="/blogs" onClick={goBlogs}>
                        <li>Blog</li>
                    </Link>
                    <Link href="/store" onClick={goStore}>
                        <li>Store</li>
                    </Link>
                    <Link href="/multimedia" onClick={goMultimedia}>
                        <li>Multimedia</li>
                    </Link>
                    <Link href="/store" onClick={goStore}>
                        <li>Descuentos</li>
                    </Link>
                    <Link href="/multimedia" onClick={goMultimedia}>
                        <li>Cursos</li>
                    </Link>
                </ul>
            </div>

            <div className="auth-nav-section">
                <span className="material-symbols-outlined">search</span>
                <div className="line-up"></div>
                <Link href="/login">
                    <button className="login-button">Iniciar Sesión</button>
                </Link>
                <Link href="/register">
                    <button className="register-button">Registrarse</button>
                </Link>
            </div>
        </div>
    );
}
