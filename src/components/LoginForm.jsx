"use client"
require('dotenv');
import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/auth/login/${email}/${password}`);
      console.log(email + " " + password)
      console.log(response);
      router.push('/');
    }
    catch (error) {
      console.log(error);
    }
  };

    return (
        <div>
            <h1 className="title_form">Acceder</h1>
            <form>
                <div className="inputFormLogin">
                    <InputForm
                        type="email"
                        name="email"
                        method={setEmail}
                        place="Tu email"
                    />
                </div>
                <div className="inputFormLogin">
                    <InputForm
                        type="password"
                        name="password"
                        method={setPassword}
                        place="Tu contraseña"
                        id={1}
                    />
                </div>
                <div className="inputFormLogin">
                    <ButtonForm text="Iniciar sesion" method={handleLogin} />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
