"use client";
require("dotenv");
import React, { useState, useEffect } from "react";
import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../styles.css";

export default function Nav(props) {
    const router = useRouter();

    const handleLogout = async (e) => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_HOST}/auth/logout`
            );

            console.log(response);
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const goStore = () => {
        window.location.href = "/store";
    };

    const goMultimedia = () => {
        window.location.href = "/multimedia";
    };

    const goBlogs = () => {
        window.location.href = "/blogs";
    };

    return (
        <div className="nav">
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
                    {/* <Link href="/multimedia" onClick={goMultimedia}>
                        <li>Multimedia</li>
                    </Link> */}
                    <Link href="/store" onClick={goStore}>
                        <li>Descuentos</li>
                    </Link>
                    {/* <Link href="/multimedia" onClick={goMultimedia}>
                        <li>Cursos</li>
                    </Link> */}
                </ul>
            </div>

            {props.logged ? (
                <div className="auth-nav-section">
                    {" "}
                    <button className="login-button" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>{" "}
                </div>
            ) : (
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
            )}
        </div>
    );
}
