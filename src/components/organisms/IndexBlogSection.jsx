import SectionTitle from "./SectionTitle";
import CardBlog from "@/components/CardBlog";
import Link from "next/link";

export default function IndexBlogSection() {
    return (
        <div className="contain_section">
            <div className="title_section blogs">
                <SectionTitle sectionName="BLOGS" />
            </div>

            <div className="contain_blogs">
                <CardBlog style={{background:"white"}} />
                <CardBlog style={{background:"white"}} />
                <CardBlog style={{background:"white"}} />
            </div>
            <div className="button_section blogs">
                <h1 className="text_button_section">
                    <Link href="/store">DESCUBRIR</Link>
                </h1>
            </div>
        </div>
    );
}
