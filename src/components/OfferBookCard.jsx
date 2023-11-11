import BookReference from "@/public/assets/book-reference.png";
import Img from "next/image";

export default function OfferBookCard(props) {
  return (
    <div className="offer-book-card">
        <Img src={BookReference} className="book-offer-image" />
        <div className="book-info">
            <h4>Titulo del libro</h4>
            <h4>2023 - Editorial tal</h4>

            <h2>$189</h2>
            <h2>$99</h2>
        </div>
    </div>
  );
}
