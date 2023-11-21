"use client"
import Img from "next/image";
import imagen from "@/public/assets/card-example.jpg";
import TextSubitleBlog from "@/components/TextSubitleBlog";
import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation";
import CommentReady from "./CommentReady";
import Swal from 'sweetalert2'
import Pusher from "pusher-js";
function VerMasBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [comment, setComment] = useState([]);
    const [user, setUser] = useState("");
    const [comentario, setComentario] = useState("");
    const uploadBlog = async () => {
        const res = await axios.get(`http://localhost:80/v1/blogs/${id}`, { withCredentials: true });
        setBlog(res.data.data);
    };
    const uploadComments = async () => {
        const res = await axios.get(`http://localhost:80/v1/comentarios/blogs/${id}`, { withCredentials: true });
        setComment(res.data.data);
    }
    const uploadUser = async () =>{
        const res = await axios.get("http://localhost:80/v1/users/get/IdToken", {withCredentials:true})
        setUser(res.data.data.email)
    }

    useEffect(() => {
        uploadBlog();
        uploadComments();
        uploadUser();

        const pusher = new Pusher("8014e7994c9494448f67", {
            cluster: "us2",
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function(data) {
            setComment(prevComment => [...prevComment, data]);
        }
        );
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!comentario){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Faltan campos por llenar"
              });
        }else{
            axios.post(`http://localhost:80/v1/comentarios/${id}`,comentario,{withCredentials:true})
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se agrego correctamente",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setComentario({
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h1 className="title_vermas">{blog.titulo}</h1>
            <Img src={blog.imagen} alt="imagen del blog" className="img_blog_vermas" width={900} height={900}/>
            <TextSubitleBlog text={blog.contenido}  />
            <br></br>
            <br></br>
            <br></br>
            <h1>Comentarios</h1>
            <form onSubmit={handleSubmit}>
                <div className="add_comment__container">
                    <p className="user_add_comment">{user}</p>
                    <input placeholder="Agregar un comentario..." className="input_add_comment" name="comentario" onChange={handleChange}/>
                    <button className="btn_add_comment" type="submit">Enviar</button>
                </div>
            </form>
                {comment.map((comment,index) =>(
                    <div key={index} className="comment_ready_page">
                    <CommentReady user={comment.id_usuario || comment.idUsuario} fecha={comment.created_at} comentario={comment.comentario}/>
                    </div>
                ))}
        </div>
    );
}

export default VerMasBlog;
