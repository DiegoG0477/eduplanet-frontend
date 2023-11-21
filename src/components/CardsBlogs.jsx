"use client";
import CardBlog from "./CardBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
function CardsBlogs() {
    const [blogs, setBlogs] = useState([])
    let limit=3
    let page=2
    const uploadBlogs = async() =>{
        const res = await axios.get(`http://localhost:80/v1/blogs?limit=${limit}&page=${page}`,{withCredentials:true})
        setBlogs(res.data.data)
    }
    useEffect(() => {
        uploadBlogs();
    }, []);
    
    return (
        <div>
            <h1 className="titulo_blog_page">Los Artículos Más Recientes</h1>
            <div className="recient_blog__container">
                {blogs.map((blog, index) => (
                    <div key={index}>
                        <Link
                            href={`/blogs/${[blog.id_blog]}`}
                            className="quitarLink"
                        >
                            <CardBlog
                                titulo={blog.titulo}
                                contenido={blog.texto_contenido}
                                fecha={blog.created_at}
                                imagen={blog.url_imagen}
                                creado={blog.created_by}
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <h1 className="titulo_blog_page">Selección del Editor</h1>

            <div className="recient_blog__container"></div>
        </div>
    );
}

export default CardsBlogs;
