import Img from "next/image";
import Link from "next/link";

export default function BlogGenericCard(props) {
    return (
        <Link href={props.route}>
            <div className="blog-generic-card">
                <Img src={props.image} width={600} height={800} className="blog-generic-card-image" />
                <div className="blog-generic-card-text">
                    <h1 className="blog-generic-card-title">{props.title}</h1>
                    {/* <h1 className="generic-card-date">${" " + props.date}</h1> */}
                </div>
            </div>
        </Link>
    );
}
