import ButtonFormTransparent from "@/components/ButtonFormTransparent";
import LoginForm from "@/components/LoginForm";
import NavForms from "@/components/NavForms";

function LoginPage() {
  return (
    <div>
      <NavForms />
      <div className="login_form">
        <LoginForm />
        <p className="text_form">¿olvidaste tu contraseña?</p>
        <div className="line_form"></div>
        <div className="link_button_register">
            <p className="text_cuenta">¿No tienes cuenta?</p>
            <ButtonFormTransparent text="Registrate"/>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
