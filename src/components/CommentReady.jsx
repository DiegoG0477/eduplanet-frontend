
import "./styles.css"
function CommentReady(props) {
  return (
    <div className="comment_ready__container">
        <div className="user_comment_ready">
            <p className="user_comment">user</p>
            <p className="fecha_comment">fecha</p>
        </div>
        <p className="comment_ready">comentario</p>
    </div>
  )
}

export default CommentReady