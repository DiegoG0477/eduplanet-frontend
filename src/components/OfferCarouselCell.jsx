import OfferBookCard from "./OfferBookCard";

export default function OfferCarouselCell(props){
    return(
        <div className="carousel-cell">
            <OfferBookCard price={props.price}/>
            <OfferBookCard price={props.price}/>
        </div>
    );
}