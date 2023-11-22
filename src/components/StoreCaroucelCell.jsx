"use client";
import BookCard from "./BookCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StoreCarouselCell(props) {
  const [books, setBooks] = useState([]);
  let limit = 5;
  let page = props.page;

  const getBooks = async () => {
      const res = await axios.get(
          `http://localhost:80/v1/materials?limit=${limit}&page=${page}`,
          { withCredentials: true }
      );
      setBooks(res.data.data);
      console.log(res.data);
  };

  useEffect(() => {
      getBooks();
  }, []);
  return (
    <>
      <div className="carousel-cell" style={props.style}>
        {books.map((book, index) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            href={`/store/book/${[book.id_material]}`}
          >
          <BookCard
            key={index}
            title={book.titulo}
            price={book.precio}
            image={book.portada_libro}
          />
          </Link>
        ))}
      </div>
    </>
  );
}
