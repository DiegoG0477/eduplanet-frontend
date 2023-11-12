import "./styles.css"
import Img from "next/image"
function CardAdmin(props) {
  return (
    <div className="cardadmin__container">
        <div className="img_admin__container">
            <Img src={props.img} alt="img" className="img_card_admin"/>
        </div>
        <h2>{props.name}</h2>
    </div>
  )
}

export default CardAdmin