import Img from "next/image";

export default function LibraryCard(props) {
    return (
        <div className="library-card">
            <Img src={props.image} className="library-card-image" width={300} height={800} />
        </div>
    );
}
