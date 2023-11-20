"use client"
import ChooseImg from "./ChooseImg"
import { useState } from "react"
import Img from "next/image"
import youtube from "@/public/assets/youtube.png"
import TextAreaInput from "./TextAreaInput"
function FormAddVideo() {
    const [imagen, setImagen] = useState(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target)
    }
  return (
    <form onSubmit={handleSubmit} >
            <div className="form_add_image__container" >
            <ChooseImg id={1} fun={setImagen} name="imagen"/>
            <div className="inputs_right_container">
                <select name="select" className="select_input">
                    <option value="value1">Video</option>
                    <option value="value2" selected>Lista de Reproduccion</option>
                </select>
                <input type="text" placeholder="Titulo del video" className="input_title"/>
                <div className="inputs_right_url">
                    <input type="text" placeholder="URL" className="input_url"/>
                    <Img src={youtube} alt="youtube" width={50} height={50} className="youtube_icon"/>
                </div>
            </div>
            </div>
            <h1 className="titulo_descripcion">Descripcion del video</h1>
            <TextAreaInput holder="Ingresar texto..." name="descripcion"/>
    </form>
  )
}

export default FormAddVideo