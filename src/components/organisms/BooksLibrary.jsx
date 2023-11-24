"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import LibraryCard from "../atoms/LibraryCard";
import BookImage from "@/public/assets/book-reference.png";

export default function BooksLibrary() {
    const [books, setBooks] = useState([]);
    let limit = 4;
    let page = 1;

    const getBooks = async () => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST}/v1/materials?limit=${limit}&page=${page}`,
            { withCredentials: true }
        );
        setBooks(res.data.data);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="library">
            <div className="offers-content" style={{ marginTop: "5vh" }}>
                <div className="collection-head">
                    <h2 className="collection-title">Biblioteca Completa</h2>
                    <Link href="/store/all">
                        <h2 className="collection-title">
                            Explorar{" "}
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </h2>
                    </Link>
                </div>

                <div className="library-content">
                    {books.map((book, index) => (
                        <Link href={`/store/book/${book.id_material}`}>
                            <LibraryCard
                                key={index}
                                image={book.portada_libro}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
