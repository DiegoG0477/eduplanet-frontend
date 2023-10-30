import OfferCarouselCell from "./OfferCarouselCell";

export default function OffersSection(props) {
  return (
    <>
      <div className="offersHead">
        <h2>ÚLTIMAS OFERTAS DESDE EL {props.discount}% DE DESCUENTO</h2>
      </div>
      <div className="offersContent">
        <div className="carousel" data-flickity>
          <OfferCarouselCell />
          <OfferCarouselCell />
        </div>
      </div>
    </>
  );
}
