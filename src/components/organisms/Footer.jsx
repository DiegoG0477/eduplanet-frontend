import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Link from "next/link";
import Img from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="top-footer-content">
                <div className="footer-third-column">
                    <Img
                        src={eduplanetLogo}
                        className="eduplanet-logo-footer"
                        alt="Eduplanet Logo"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptates. Quaerat, voluptatum. Quisquam,
                        voluptates. Quaerat, voluptatum.
                    </p>
                    <p>Nuestras Redes Sociales</p>
                    <div className="social-i-footer-container">
                        <i className="fa-brands fa-instagram social-icon-footer"></i>
                        <i className="fa-brands fa-facebook social-icon-footer"></i>
                        <i className="fa-brands fa-youtube social-icon-footer"></i>
                    </div>
                </div>

                <div>
                    <div className="footer-feature">
                        <div
                            className="feature-color-bar"
                            style={{ background: "#d41616" }}
                        ></div>
                        <p>Materiales</p>
                    </div>
                    <div className="footer-feature">
                        <div
                            className="feature-color-bar"
                            style={{ background: "#FAFF00" }}
                        ></div>
                        <p>Descuentos</p>
                    </div>
                    <div className="footer-feature">
                        <div
                            className="feature-color-bar"
                            style={{ background: "#0029FF" }}
                        ></div>
                        <p>Videos</p>
                    </div>
                    <div className="footer-feature">
                        <div
                            className="feature-color-bar"
                            style={{ background: "#FA00FF" }}
                        ></div>
                        <p>Blog</p>
                    </div>
                    <div className="footer-feature">
                        <div
                            className="feature-color-bar"
                            style={{ background: "#6C3131" }}
                        ></div>
                        <p>Comentarios</p>
                    </div>
                </div>

                <div className="footer-third-column">
                    <p>Métodos de pago</p>
                    <div className="payment-methods">
                        <div className="payment-pair">
                            <i className="fa-brands fa-cc-visa payment-method"></i>
                            <i className="fa-brands fa-cc-mastercard payment-method"></i>
                        </div>
                        <div className="payment-pair">
                            <i className="fa-brands fa-cc-paypal payment-method"></i>
                            <i className="fa-brands fa-cc-amex payment-method"></i>
                        </div>
                    </div>
                </div>
            </div>

            <p className="terms-text">© 2023 Eduplanet. Todos los derechos reservados.</p>

            <div className="bottom-footer-content">
                <div className="footer-links">
                    <Link href="#" style={{ textDecoration: "none" }}>
                        <p className="footer-link">Términos y condiciones</p>
                    </Link>

                    <Link href="#" style={{ textDecoration: "none" }}>
                        <p className="footer-link">Política de privacidad</p>
                    </Link>

                    <Link href="#" style={{ textDecoration: "none" }}>
                        <p className="footer-link">Contacto</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
