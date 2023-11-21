import Img from "next/image";
import Link from "next/link";

export default function GenericCard(props) {
    return (
        <Link href={props.route}>
            <div className="generic-card">
                <Img src={props.image}></Img>
                <div className="generic-card-text">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    );
}
