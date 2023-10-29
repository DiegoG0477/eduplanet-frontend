import ButtonForm from "./ButtonForm"
import InputForm from "./InputForm"

function LoginForm() {
  return (
    <div>
        <h1 className="title_form">Acceder</h1>
        <form>
            <div className="inputFormLogin">
            <InputForm type="email" name="email" method="nothing now" place="Tu email" />
            </div>
            <div className="inputFormLogin">
            <InputForm type="password" name="password" method="nothing now" place="Tu contraseña" id={1}/>
            </div>
            <div className="inputFormLogin">
            <ButtonForm text="Iniciar sesion"/>
            </div>
        </form>
    </div>
  )
}

export default LoginForm