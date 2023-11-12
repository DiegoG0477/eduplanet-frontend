import Img from "next/image"
import agregar from "@/public/assets/boton-agregar.png"
function ChooseImg() {
  return (
    <div className="input_blog_add_image">
        
        <Img src={agregar} alt="agregar" className="img_agregar_icon"/>
        <p>Agregar imagen</p>
        <input type="file" />
    </div>
  )
}

export default ChooseImg