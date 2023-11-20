import Img from "next/image"
import upload from "@/public/assets/subir.png"
import "./styles.css"
function ButtonUploadAgainImg(props) {
  return (
    <div className="button_upload__container">
        <Img src={upload} alt="agregar" className="img_upload_again"/>
        <input type="file" accept="image/*" name={props.name} className="box_icon_upload_again" onChange={ (e)=>{
          props.fun(e.target.files[0])
          props.guardarFile(e.target.files[0])
        }} />
    </div>
  )
}

export default ButtonUploadAgainImg