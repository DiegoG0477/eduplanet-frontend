import eduplanetLogo from "@/public/assets/logo-png-w.png";
import Img from "next/image";


export default function SectionTitle(props) {
    return (
        <div className="msb-head">
            <Img
                className="msb-logo"
                src={eduplanetLogo}
                alt="eduplanet-logo"
            />
            <div className="line-up"></div>
            <h2 className="msb-title-section">{props.sectionName}</h2>
        </div>
    );
}
