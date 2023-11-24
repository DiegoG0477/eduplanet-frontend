"use client";
require("dotenv");
import ChooseImg from "./ChooseImg";
import TextAreaInput from "./TextAreaInput";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ButtonForm from "./ButtonForm";
import { useParams } from "next/navigation";

function FormAddBlog(props) {
    const id = useParams().id;
    const [blog, setBlog] = useState({
        titulo: "",
        texto: "",
    });
    const [imagen, setImagen] = useState(null);

    const getBlog = async () => {
        console.log(id);
        console.log(process.env.NEXT_PUBLIC_HOST + "/v1/blogs/" + id);
        const res = await axios.get(
            process.env.NEXT_PUBLIC_HOST + "/v1/blogs/" + id,
            {
                withCredentials: true,
            }
        );
        console.log(res.data.data);

        if (props.edit) {
            setBlog({
                titulo: res.data.data.titulo,
                texto: res.data.data.contenido,
                imagenUrl: res.data.data.imagen,
            });
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    const deleteBlog = async (e) => {
        e.preventDefault();
        const res = await axios.delete(
            process.env.NEXT_PUBLIC_HOST + "/v1/blogs/" + id,
            { withCredentials: true }
        );
        if (res.status == 200) {
            alert("Blog eliminado");
        } else {
            alert("Error al eliminar blog");
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (props.edit) {
            const formEdit = new FormData();
            formEdit.append("titulo", blog.titulo);
            formEdit.append("url_imagen", imagen);
            formEdit.append("texto_contenido", blog.texto);

            console.log(process.env.NEXT_PUBLIC_HOST + "/v1/blogs/blog/" + id)
            const res = await axios.patch(
                process.env.NEXT_PUBLIC_HOST + "/v1/blogs/blog/" + id,
                formEdit,
                { withCredentials: true }
            );
            if (res.status == 200) {
                alert("Blog editado");
            } else {
                alert("Error al editar blog");
            }
        } else {
            const form = new FormData();
            form.append("titulo", blog.titulo);
            form.append("imagen", imagen);
            form.append("contenido", blog.texto);
            const res = await axios.post(
                process.env.NEXT_PUBLIC_HOST + "/v1/blogs/",
                form,
                { withCredentials: true }
            );
            if (res.status == 201) {
                alert("Blog agregado");
            } else {
                alert("Error al agregar blog");
            }
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Agregar titulo"
                className="input_blog_add"
                value={blog.titulo}
                name="titulo"
                onChange={handleChange}
            />
            <ChooseImg
                fun={setImagen}
                edit={props.edit}
                value={blog.imagenUrl}
                name="imagen"
            />
            <div className="textarea_blog_page">
                <TextAreaInput
                    holder="Escribe Articulo..."
                    value={blog.texto}
                    fun={handleChange}
                    name="texto"
                />
            </div>

            {props.edit ? (
                <div className="button-edit-content">
                    <div className="button_add_blog">
                        <ButtonForm text="Editar Artículo" />
                    </div>
                    <div className="button_add_blog">
                        <ButtonForm
                            text="Eliminar del blog"
                            method={deleteBlog}
                            style={{ background: "#b82727" }}
                        />
                    </div>
                </div>
            ) : (
                <div className="button_add_blog">
                    <ButtonForm text="Agregar al Blog" />
                </div>
            )}
        </form>
    );
}

export default FormAddBlog;
