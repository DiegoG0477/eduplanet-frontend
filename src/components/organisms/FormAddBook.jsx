"use client";
import ChooseBookThumbnail from "../molecules/ChooseBookThumbnail";
import ChooseBookPdf from "../molecules/ChooseBookPdf";
import TextAreaInput from "../TextAreaInput";
import Feature from "../molecules/Feature";
import ButtonForm from "../ButtonForm";
import axios from "axios";
import { useState } from "react";

export default function FormAddBook() {
    const [book, setBook] = useState({
        titulo: "",
        precio: "",
        editorial: "",
        autor: "",
        anioMaterial: "",
        numeroPaginas: "",
        descripcion: "",
    });
    const [thumbnail, setThumbnail] = useState(null);
    const [pdf, setPdf] = useState(null);

    const handleChange = (e) => {
        e.preventDefault();
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("titulo", book.titulo);
        form.append("precio", book.precio);
        form.append("editorial", book.editorial);
        form.append("autor", book.autor);
        form.append("anioMaterial", book.anioMaterial);
        form.append("numeroPaginas", book.numeroPaginas);
        form.append("descripcion", book.descripcion);
        form.append("portada", thumbnail);
        form.append("pdf", pdf);

        axios.defaults.withCredentials = true;
        const status = await axios.post("http://localhost:3001/v1/materials/",form);

        if(status.status === 201){
            alert("se agregó el blog correctamente");
        }else{
            alert("no se agregó el blog correctamente");
        }
        console.log(book);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="book-shopping-body">
                <ChooseBookThumbnail method={setThumbnail} name="thumbnail" />
                <div className="book-shopping-data">
                    <input
                        className="book-input-title"
                        type="text"
                        name="titulo"
                        placeholder="Escribir titulo..."
                        onChange={handleChange}
                    />

                    <input
                        className="book-input-title book-input-price"
                        type="number"
                        name="precio"
                        placeholder="$..."
                        onChange={handleChange}
                    />

                    <div
                        className="book-shopping-features"
                        style={{ marginTop: "7vh" }}
                    >
                        <div className="features">
                            <Feature
                                type={"text"}
                                name={"editorial"}
                                method={handleChange}
                                placeholder={"Editorial..."}
                                bookInput={true}
                                spanText={"book_2"}
                            />
                            <Feature
                                type={"text"}
                                name={"autor"}
                                method={handleChange}
                                placeholder={"Autor..."}
                                bookInput={true}
                                spanText={"person"}
                            />
                            <Feature
                                type={"number"}
                                name={"anioMaterial"}
                                method={handleChange}
                                placeholder={"Año..."}
                                bookInput={true}
                                spanText={"calendar_month"}
                            />
                        </div>

                        <div className="features" style={{ marginLeft: "3vw" }}>
                            <Feature
                                type={"number"}
                                name={"numeroPaginas"}
                                method={handleChange}
                                placeholder={"N. Páginas..."}
                                bookInput={true}
                                spanText={"description"}
                            />
                            <Feature
                                spanText={"download"}
                                featureText={"Descarga Digital"}
                            />
                        </div>
                    </div>

                    <ChooseBookPdf method={setPdf} name="pdf" />
                </div>
            </div>
            <div className="book-description-container">
                <h2>Descripción</h2>
                <TextAreaInput
                    name="descripcion"
                    style={{ borderRadius:"7px", border:"2px solid #121D41" }}
                    fun={handleChange}
                    holder="Escribir descripción..."
                />
            </div>

            <div className="button_add_blog">
                <ButtonForm text="Subir Libro" />
            </div>
        </form>
    );
}
