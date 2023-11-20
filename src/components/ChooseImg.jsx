"use client"
import Img from "next/image"
import agregar from "@/public/assets/boton-agregar.png"
import { useState } from "react"
import ButtonUploadAgainImg from "./ButtonUploadAgainImg"
function ChooseImg(props) {
  const [file,setFile] = useState(null);
  console.log(file)
  return (
    <div>
      {file == null?(
        props.id == 1 ?(
              <div className="input_blog_add_video">
            <Img src={agregar} alt="agregar" className="video_agregar_icon"/>
            <p>Agregar miniatura</p>
            <input type="file" name={props.name} onChange={ (e)=>{
              props.fun(e.target.files[0])
              setFile(e.target.files[0])
            }}/>
            </div>
        ):(
          <div className="input_blog_add_image">
        <Img src={agregar} alt="agregar" className="img_agregar_icon"/>
        <p>Agregar imagen</p>
        <input type="file" name={props.name} onChange={ (e)=>{
          props.fun(e.target.files[0])
          setFile(e.target.files[0])
        }}/>
      </div>
        )
      ):(
        props.id == 1 ?(
              <div className="input_blog_add_video_ready">
            <div className="upload_again_button">
            <ButtonUploadAgainImg fun={props.fun} guardarFile={setFile}/>
            </div>
            <Img src={URL.createObjectURL(file)} alt="agregar" width={300} height={100} className="img_agregada"/>
            </div>
        ):(
            <div className="input_blog_add_image_ready">
          <div className="upload_again_button">
          <ButtonUploadAgainImg fun={props.fun} guardarFile={setFile}/>
          </div>
          <Img src={URL.createObjectURL(file)} alt="agregar" width={300} height={100} className="img_agregada"/>
          </div>
        )
      )}
    </div>
  )
}

export default ChooseImg