import Img from "next/image";
import Link from "next/link";

export default function GenericCard(props) {
    return (
        <Link href={props.route}>
            <div className="generic-card">
                <Img src={props.image} width={600} height={800} className="generic-card-image" />
                <div className="generic-card-text">
                    <h1 className="generic-card-title">{props.title}</h1>
                    <h1 className="generic-card-title">${" " + props.price}</h1>
                </div>
            </div>
        </Link>
    );
}
