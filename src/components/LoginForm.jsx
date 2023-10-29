import ButtonForm from "./ButtonForm"
import InputForm from "./InputForm"

function LoginForm() {
  return (
    <div>
        <h1 className="title_form">Acceder</h1>
        <form>
            <InputForm type="email" name="email" method="nothing now" place="Tu email" />
            <InputForm type="password" name="password" method="nothing now" place="Tu contraseña" id={1}/>
            <ButtonForm text="Iniciar sesion"/>
        </form>
    </div>
  )
}

export default LoginForm