import "./styles.css"
function TextSubitleBlog(props) {
  return (
    <div className="textsubtitle__container">
        <h1 className="subtitle_vermas_blog">{props.subtitle}</h1>
        <p className="text_vermas_blog">{props.text}</p>
    </div>
  )
}

export default TextSubitleBlog