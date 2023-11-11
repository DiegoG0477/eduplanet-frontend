import Link from "next/link";
import LibraryCard from "../atoms/LibraryCard";
import BookImage from "@/public/assets/book-reference.png";

export default function BooksLibrary() {
    return (
        <div className="library">
            <div className="offers-content" style={{ marginTop: "5vh" }}>
                <div className="collection-head">
                    <h2 className="collection-title">Biblioteca Completa</h2>
                    <Link href="/store">
                        <h2 className="collection-title">
                            Explorar{" "}
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </h2>
                    </Link>
                </div>

                <div className="library-content">
                    {/* Reemplazar por un mapeo de datos que contenga las 4 imagenes de la 
                pagina 1 de la biblioteca en mysql */}
                    <LibraryCard image={BookImage} />
                    <LibraryCard image={BookImage} />
                    <LibraryCard image={BookImage} />
                    <LibraryCard image={BookImage} />
                </div>
            </div>
        </div>
    );
}
