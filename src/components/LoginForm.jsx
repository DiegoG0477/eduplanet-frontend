import InputForm from "./InputForm"

function LoginForm() {
  return (
    <div className="login__container">
        <h1 className="title_form">Acceder</h1>
        <form>
            <InputForm type="email" name="email" method="nothing now" place="Tu email"/>
            <InputForm type="password" name="password" method="nothing now" place="Tu contraseña"/>
        </form>
    </div>
  )
}

export default LoginForm