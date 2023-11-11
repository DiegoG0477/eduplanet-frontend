import eduplanetLogo from "@/public/assets/logo-png-w.png";
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
                    <i className="fa-brands fa-instagram social-icon-footer"></i>
                    <i className="fa-brands fa-facebook social-icon-footer"></i>
                    <i className="fa-brands fa-youtube social-icon-footer"></i>
                </div>

                <div>
                    <div className="footer-feature">
                        <div className="feature-color-bar"></div> <p>Materiales</p>
                    </div>
                    <div className="footer-feature"></div>
                    <div className="footer-feature"></div>
                    <div className="footer-feature"></div>
                    <div className="footer-feature"></div>
                </div>

                <div className="payment-methods">

                </div>
            </div>
        </footer>
    );
}
