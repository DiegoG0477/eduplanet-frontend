import ButtonForm from "./ButtonForm"
import InputForm from "./InputForm"

function RegisterForm() {
  return (
    <div className="registerForm__container" >
        <form>
        <div className="register__container">
        <div className="colum">
            <InputForm type="text" name="email" fun="" place="Email"/>
            <InputForm type="text" name="name" fun="" place="Nombre(s)"/>
            <InputForm type="text" name="lastname" fun="" place="Apellido(s)"/>
        </div>
        <div className="colum">
            <InputForm type="password" name="password" fun="" place="Contraseña" id={1}/>
            <InputForm type="password" name="password" fun="" place="Confirmar contraseña" id={1}/>
            <ul>
                <li className="list_text">Debe tener al menos 8 caracteres.</li>
                <li className="list_text">Evita que sea similar a tu nombre, apellidos o correo electrónico.</li>
            </ul>
        </div>
        </div>
        <p className="terminos">Al registrarte aceptas nuestros Terminos y Condiciones y Aviso de Privacidad de EDUPLANET.</p>
        <ButtonForm text="Aceptar"/>
        </form>
        
    </div>
  )
}

export default RegisterForm