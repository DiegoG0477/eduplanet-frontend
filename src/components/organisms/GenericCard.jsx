import Img from "next/image";
import Link from "next/link";

export default function GenericCard(props) {
    return (
        <Link href={props.route}>
            <div className="generic-card">
                <Img src={props.image} width={100} height={300} />
                <div className="generic-card-text">
                    <h1>{props.title}</h1>
                    <p>{props.price}</p>
                </div>
            </div>
        </Link>
    );
}
