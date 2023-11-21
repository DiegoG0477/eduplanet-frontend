import imgVideo from "@/public/assets/video-example.png";
import CardVideo from "@/components/molecules/CardVideo";
import imgBanner from "@/public/assets/science-education-concepts-banner-vector.jpg";

export default function MultimediaCarousel(props) {
    return (
        <>
            <div className="carousel carousel-multimedia" style={{marginTop:"5vh"}} data-flickity>
                <div className="carousel-cell">
                    <CardVideo image={imgBanner} />
                    <CardVideo image={imgVideo} />
                </div>
                <div className="carousel-cell">
                    <CardVideo image={imgBanner} />
                    <CardVideo image={imgVideo} />
                </div>
                <div className="carousel-cell">
                    <CardVideo image={imgBanner} />
                    <CardVideo image={imgVideo} />
                </div>
            </div>
        </>
    );
}
