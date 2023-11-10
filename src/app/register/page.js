import ButtonFormTransparent from "@/components/ButtonFormTransparent"
import NavForms from "@/components/NavForms"
import RegisterForm from "@/components/RegisterForm"
import Link from "next/link"
function RegisterPage() {
  return (
    <div>
        <NavForms/>
        <div className="register_form">
            <h1 className="title_form_register">Registro</h1>
            <RegisterForm/>
            <div className="line_form"></div>
            <div className="link_button_register">
            <p className="text_cuenta">¿Ya tienes cuenta?</p>
            <Link href="/login">
            <ButtonFormTransparent text="Iniciar Sesion"/>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage