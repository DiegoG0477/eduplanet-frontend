import LoginForm from "@/components/LoginForm"
import NavForms from "@/components/NavForms"

function LoginPage() {
  return (
    <div>
        <NavForms/>
        <div className="login_form">
        <LoginForm/>    
        </div>
    </div>
  )
}

export default LoginPage