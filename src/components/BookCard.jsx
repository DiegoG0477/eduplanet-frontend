import Img from "next/image";
import BookReference from "@/public/assets/book-reference.png";
import BookCardButton from "./atoms/BookCardButton";

export default function BookCard(props) {
    return (
        <div className="book-card">
            <div className="image-container">
                <Img src={props.image} className="book-card-image" width={100} height={300}/>
            </div>
            <div className="book-info">
                <h4>{props.title}</h4>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="icons-container">
                        <BookCardButton
                            icon="add_shopping_cart"
                            iconClass="cart"
                        />
                        <div style={{ marginLeft: "1vw" }}>
                            <BookCardButton icon="info" />
                        </div>
                    </div>
                    <div className="price">
                        <h3>${props.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
