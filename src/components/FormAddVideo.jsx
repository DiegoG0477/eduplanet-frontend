"use client"
import ChooseImg from "./ChooseImg"
import { useState } from "react"
import Img from "next/image"
import youtube from "@/public/assets/youtube.png"
import TextAreaInput from "./TextAreaInput"
import ButtonForm from "./ButtonForm"
import axios from "axios"
import Swal from 'sweetalert2'
function FormAddVideo() {
    const [imagen, setImagen] = useState(null);
    const [tipo, setTipo] = useState({
        placeHolder:"Titulo del video",
        titulo:"Descripción del video",
        portada:"Agregar Miniatura"
    });
    const [video, setVideo] = useState({
        titulo:"",
        descripcion:"",
        link:"",
        idTipoVideo:1
    });
    let select = 1;
    const handleChange = (e) =>{
        select = e.target.value;
        if(select == 1){
            setTipo({
                placeHolder:"Titulo del video",
                titulo:"Descripción del Video",
                portada:"Agregar Miniatura"
            })
        }else{
            setTipo({
                placeHolder:"Titulo de la colección",
                titulo:"Descripción de la colección",
                portada:"Agregar Portada"
            })
        }
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("imagen", imagen);
        formData.append("titulo", video.titulo);
        formData.append("descripcion", video.descripcion);
        formData.append("link", video.link);
        formData.append("idTipoVideo", video.idTipoVideo);

        if(!video.idTipoVideo || !video.titulo || !video.descripcion || !video.link || !imagen){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Faltan campos por llenar"
              });
        }else{
            await axios.post("http://localhost:80/v1/videos", formData, {withCredentials: true})
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se agrego correctamente",
                showConfirmButton: false,
                timer: 1500
              });
        }
        
    }
    
  return (
    <form onSubmit={handleSubmit} >
            <div className="form_add_image__container" >
            <ChooseImg id={1} fun={setImagen} name="imagen" nombre={tipo.portada}/>
            <div className="inputs_right_container">
                <select name="idTipoVideo" className="select_input" onChange={handleChange}>
                    <option value={1} >Video</option>
                    <option value={2}>Lista de Reproduccion</option>
                </select>
                <input type="text" name="titulo" placeholder={tipo.placeHolder} className="input_title" onChange={handleChange}/>
                <div className="inputs_right_url">
                    <input type="text" name="link" placeholder="URL" className="input_url" onChange={handleChange}/>
                    <Img src={youtube} alt="youtube" width={50} height={50} className="youtube_icon"/>
                </div>
            </div>
            </div>
            <h1 className="titulo_descripcion">{tipo.titulo}</h1>
            <TextAreaInput holder="Ingresar texto..." name="descripcion" fun={handleChange}/>
            <ButtonForm text="Agregar"/>
    </form>
  )
}

export default FormAddVideo