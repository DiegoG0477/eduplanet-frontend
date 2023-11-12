import TextAreaInput from "@/components/TextAreaInput"
import ChooseImg from "@/components/chooseImg"

function addBlogPage() {
  return (
    <div className='body_blog'>
      <input placeholder="Agregar titulo" className='input_blog_add'/>
      <ChooseImg/>
      <div className="textarea_blog_page">
        <TextAreaInput holder="Escribe Articulo..."/>
      </div>
      </div>
  )
}

export default addBlogPage