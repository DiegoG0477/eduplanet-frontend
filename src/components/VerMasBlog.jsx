"use client"
import Img from "next/image";
import imagen from "@/public/assets/card-example.jpg";
import TextSubitleBlog from "@/components/TextSubitleBlog";
import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation";
import CommentReady from "./CommentReady";
function VerMasBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [comment, setComment] = useState([]);
    const uploadBlog = async () => {
        const res = await axios.get(`http://localhost:80/v1/blogs/${id}`, { withCredentials: true });
        setBlog(res.data.data);
        console.log(res.data.data);
    };
    const uploadComments = async () => {
        const res = await axios.get(`http://localhost:80/v1/comentarios/blogs/${id}`, { withCredentials: true });
        setComment(res.data.data);
        console.log(res.data.data);
    }

    useEffect(() => {
        uploadBlog();
        uploadComments();
    }, []);

    return (
        <div>
            <h1 className="title_vermas">{blog.titulo}</h1>
            <Img src={blog.imagen} alt="imagen del blog" className="img_blog_vermas" width={900} height={900}/>
            <TextSubitleBlog text={blog.contenido}  />

            <h1>Comentarios</h1>
            <div className="add_comment__container">
                <p className="user_add_comment">usuario</p>
                <input placeholder="Agregar un comentario..." className="input_add_comment"/>
            </div>
            <div className="comment_ready_page">
            <CommentReady/>
            </div>
        </div>
    );
}

export default VerMasBlog;
