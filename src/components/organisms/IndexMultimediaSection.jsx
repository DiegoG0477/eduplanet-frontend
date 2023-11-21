import SectionTitle from "./SectionTitle";
import CardBlog from "@/components/CardBlog";
import Link from "next/link";
import CardVideo from "@/components/molecules/CardVideo";
import imgBanner from "@/public/assets/science-education-concepts-banner-vector.jpg";
import imgVideo from "@/public/assets/video-example.png";

export default function IndexMultimediaSection() {
    return (
        <div className="contain_section">
            <div className="title_section cursos">
                <SectionTitle sectionName="CURSOS" />
            </div>
            <div className="contain_cursos">
                <CardVideo image={imgBanner} />
                <CardVideo image={imgVideo} />
            </div>
            <div className="button_section cursos">
                <h1 className="text_button_section">
                    <Link href="/store">DESCUBRIR</Link>
                </h1>
            </div>
        </div>
    );
}
