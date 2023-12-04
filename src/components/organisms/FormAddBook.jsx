"use client";
require("dotenv");
import ChooseBookThumbnail from "../molecules/ChooseBookThumbnail";
import ChooseBookPdf from "../molecules/ChooseBookPdf";
import TextAreaInput from "../TextAreaInput";
import Feature from "../molecules/Feature";
import ButtonForm from "../ButtonForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function FormAddBook(props) {
    const id = useParams().id;
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

    const getBook = async () => {
        console.log(id);
        console.log(process.env.NEXT_PUBLIC_HOST + "/materials/" + id);
        const res = await axios.get(
            process.env.NEXT_PUBLIC_HOST + "/materials/" + id,
            {
                withCredentials: true,
            }
        );
        console.log(res.data.data);

        if (props.edit) {
            setBook({
                titulo: res.data.data.titulo,
                precio: res.data.data.precio,
                editorial: res.data.data.editorial,
                autor: res.data.data.autor,
                anioMaterial: res.data.data.anioMaterial,
                numeroPaginas: res.data.data.numeroPaginas,
                descripcion: res.data.data.descripcion,
                portadaLibroUrl: res.data.data.portadaLibroUrl,
            });
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("titulo", book.titulo);
        form.append("precio", book.precio);
        form.append("editorial", book.editorial);
        form.append("autor", book.autor);
        form.append("year_material", book.anioMaterial);
        form.append("numero_paginas", book.numeroPaginas);
        form.append("descripcion", book.descripcion);
        form.append("portada", thumbnail);
        form.append("pdf", pdf);

        axios.defaults.withCredentials = true;

        if (props.edit) {
            const status = await axios.patch(
                process.env.NEXT_PUBLIC_HOST + "/materials/" + id,
                form
            );
            if (status.status === 200) {
                alert("se editó el libro correctamente");
            } else {
                alert("no se editó el libro correctamente");
            }
        } else {
            const status = await axios.post(
                process.env.NEXT_PUBLIC_HOST + "/materials/",
                form
            );

            if (status.status === 201) {
                alert("se agregó el libro correctamente");
            } else {
                alert("no se agregó el libro correctamente");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="book-shopping-body">
                <ChooseBookThumbnail
                    method={setThumbnail}
                    name="thumbnail"
                    value={book.portadaLibroUrl}
                    edit={props.edit}
                />
                <div className="book-shopping-data">
                    <input
                        className="book-input-title"
                        type="text"
                        name="titulo"
                        placeholder={"Escribir titulo..."}
                        value={book.titulo}
                        onChange={handleChange}
                    />

                    <input
                        className="book-input-title book-input-price"
                        type="number"
                        name="precio"
                        // step="0.01"
                        placeholder="$..."
                        value={book.precio}
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
                                value={book.editorial}
                                bookInput={true}
                                spanText={"book_2"}
                            />
                            <Feature
                                type={"text"}
                                name={"autor"}
                                method={handleChange}
                                value={book.autor}
                                placeholder={"Autor..."}
                                bookInput={true}
                                spanText={"person"}
                            />
                            <Feature
                                type={"number"}
                                name={"anioMaterial"}
                                method={handleChange}
                                placeholder={"Año..."}
                                value={book.anioMaterial}
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
                                value={book.numeroPaginas}
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
                    style={{ borderRadius: "7px", border: "2px solid #121D41" }}
                    fun={handleChange}
                    value={book.descripcion}
                    holder="Escribir descripción..."
                />
            </div>

            {props.edit ? (
                <div className="button-edit-content">
                    <div className="button_add_blog">
                        <ButtonForm text="Editar Libro" />
                    </div>
                    {/* <div className="button_add_blog">
                        <ButtonForm text="Eliminar libro" style={{background:"#b82727"}} />
                    </div> */}
                </div>
            ) : (
                <div className="button_add_blog">
                    <ButtonForm text="Subir Libro" />
                </div>
            )}
        </form>
    );
}
