function DatosCardBlog() {
    const name= "Flor furgiule"
    const date= "9 octubre , 2023"
    const category= "Blog"
  return (
    <div className='datos_blog__container'>
        <p className='datos_blog_text'>{name +" | "+date + " | "+ category}</p>
    </div>
  )
}

export default DatosCardBlog