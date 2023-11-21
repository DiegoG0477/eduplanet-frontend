import BookCard from "./BookCard";

export default function StoreCarouselCell(props) {
  return (
    <>
      <div className="carousel-cell" style={props.style}>
        <BookCard price='345'/>

        <BookCard price='345'/>

        <BookCard price='345'/>

        <BookCard price='345'/>

        <BookCard price='345'/>
      </div>
    </>
  );
}
