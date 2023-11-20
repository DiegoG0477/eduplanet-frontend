import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";
import Link from "next/link";

export default function Nav() {
    const goStore = () => {
        window.location.href = "/store";
    }

    return (
        <div className="nav">
            <Img src={eduplanetLogo} className="nav-logo" />
            <div className="nav-links">
                <ul>
                    <Link href="/blogs"><li>Blog</li></Link>
                    <Link href="/store" onClick={goStore} ><li>Store</li></Link>
                    <Link href="/multimedia"><li>Multimedia</li></Link>
                    <Link href="/store"><li>Descuentos</li></Link>
                    <Link href="/multimedia"><li>Cursos</li></Link>
                </ul>
            </div>

            <div className="auth-nav-section">
                <span className="material-symbols-outlined">search</span>
                <div className="line-up"></div>
                <Link href="/login"><button className="login-button">Iniciar Sesión</button></Link>
                <Link href="/register"><button className="register-button">Registrarse</button></Link>
                
            </div>
        </div>
    );
}
