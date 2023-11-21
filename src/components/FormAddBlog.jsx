"use client"
import ChooseImg from "./ChooseImg"
import TextAreaInput from "./TextAreaInput"
import "./styles.css"
import { useState } from "react"
import axios from "axios"
import ButtonForm from "./ButtonForm"

function FormAddBlog() {
    const [blog, setBlog] = useState({
        titulo:"",
        texto:""
    })
    const [imagen, setImagen] = useState(null);
    const handleChange = (e)=>{
        e.preventDefault()
        setBlog({
            ...blog,
            [e.target.name] : e.target.value,
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const form = new FormData()
        form.append("titulo", blog.titulo)
        form.append("imagen",imagen)
        form.append("contenido",blog.texto)
        await axios.post("http://localhost:80/v1/blogs",form, {withCredentials: true})
        alert("se agrego el blog correctamente")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Agregar titulo" className='input_blog_add' name="titulo" onChange={handleChange}/>
        <ChooseImg  fun={setImagen} name="imagen"/>
        <div className="textarea_blog_page">
          <TextAreaInput holder="Escribe Articulo..." fun={handleChange} name="texto"/>
        </div>
        <div className="button_add_blog">
          <ButtonForm text="Agregar Blog"/>
        </div>
      </form>
  )
}

export default FormAddBlog