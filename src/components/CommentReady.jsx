"use client"
import "./styles.css"
import { useEffect,useState } from "react";
import axios from "axios";
function CommentReady(props) {
    const [user, setUser] = useState("")
    const uploadUser = async(id) => {
        const res = await axios.get("http://localhost:80/v1/users/"+id, {withCredentials: true})
        setUser(res.data.data.nombre)
    }
    function convertirFecha(fechaISO) {
        var fecha = new Date(fechaISO);
        fecha.setUTCHours(fecha.getUTCHours() - 6);
        var año = fecha.getFullYear();
        var mes = ('0' + (fecha.getUTCMonth() + 1)).slice(-2);
        var dia = ('0' + fecha.getUTCDate()).slice(-2);
        var fechaFormateada = dia + '-' + mes + '-' + año;
      
        return fechaFormateada;
      }
      const fecha = convertirFecha(props.fecha)
      useEffect(() => {
        uploadUser(props.user)
      },[])
  return (
    <div className="comment_ready__container">
        <div className="user_comment_ready">
            <p className="user_comment">{user}</p>
            <p className="fecha_comment">{fecha}</p>
        </div>
        <p className="comment_ready">{props.comentario}</p>
    </div>
  )
}

export default CommentReady