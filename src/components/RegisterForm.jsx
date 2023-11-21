"use client"
import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`http://localhost:80/v1/auth/signup`, {
        email:email,
        password:password,
        nombre:nombre,
        apellidoPat:apellido, 
        apellidoMat:apellido
      });

      console.log(response);
      router.push('/login');
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerForm__container" >
        <form>
        <div className="register__container">
        <div className="colum">
            <InputForm type="text" name="email" method={setEmail} place="Email"/>
            <InputForm type="text" name="name" method={setNombre} place="Nombre(s)"/>
            <InputForm type="text" name="lastname" method={setApellido} place="Apellido(s)"/>
        </div>
        <div className="colum">
            <InputForm type="password" name="password" method={setPassword} place="Contraseña" id={1}/>
            <InputForm type="password" name="password" method={setPassword} place="Confirmar contraseña" id={1}/>
            <ul>
                <li className="list_text">Debe tener al menos 8 caracteres.</li>
                <li className="list_text">Evita que sea similar a tu nombre, apellidos o correo electrónico.</li>
            </ul>
        </div>
        </div>
        <p className="terminos">Al registrarte aceptas nuestros Terminos y Condiciones y el Aviso de Privacidad de EDUPLANET.</p>
        <ButtonForm text="Aceptar" method={handleSignUp} />
        </form>
        
    </div>
  )
}

export default RegisterForm