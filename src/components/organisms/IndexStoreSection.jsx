import StoreCarouselCell from "../StoreCaroucelCell";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

export default function IndexStoreSection() {
    return (
        <div className="contain_section">
            <div className="title_section store">
                <SectionTitle sectionName="STORE" />
            </div>
            <div className="contain_store">
                <StoreCarouselCell
                    style={{
                        marginRight: "5vw",
                        marginLeft: "5vw",
                        marginTop: "9vh",
                    }}
                />
            </div>
            <div className="button_section store">
                    <h1 className="text_button_section"><Link href="/store">DESCUBRIR</Link></h1>
            </div>
        </div>
    );
}
