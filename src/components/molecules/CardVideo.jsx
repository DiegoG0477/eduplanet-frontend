import Img from "next/image";

export default function CardVideo(props) {
    return (
        <>
            <div>
                <div className="card-video" >
                    <Img src={props.image}/>
                </div>
            </div>
        </>
    );
}
