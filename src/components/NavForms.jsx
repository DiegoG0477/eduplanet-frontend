import "./styles.css"
import Img from "next/image"
import imagen from "@/public/assets/logo-png-w.png"
function NavForms() {
  return (
    <div className='nav__container'>
        <Img src={imagen} alt="logo" className="logo"/>
    </div>
  )
}
export default NavForms