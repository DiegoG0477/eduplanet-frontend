import BookCard from "./BookCard";

export default function StoreCarouselCell() {
  return (
    <>
      <div className="carousel-cell">
        <BookCard price='345'/>

        <BookCard price='345'/>

        <BookCard price='345'/>

        <BookCard price='345'/>

        <BookCard price='345'/>
      </div>
    </>
  );
}
