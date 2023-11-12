import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";
import "../styles.css"
export default function Nav() {
    return (
        <div className="nav">
            <Img src={eduplanetLogo} className="nav-logo" />
            <div className="nav-links">
                <ul>
                    <li>Blog</li>
                    <li>Store</li>
                    <li>Multimedia</li>
                    <li>Descuentos</li>
                    <li>Cursos</li>
                </ul>
            </div>

            <div className="auth-nav-section">
                <span className="material-symbols-outlined">search</span>
                <div className="line-up"></div>
                <button className="login-button">Iniciar Sesión</button>
                <button className="register-button">Registrarse</button>
            </div>
        </div>
    );
}
