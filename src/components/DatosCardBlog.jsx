"use client"
import axios from "axios"
import { useEffect,useState } from "react"
function DatosCardBlog(props) {
  const [user, setUser] = useState({
    nombre: "",
    apellido: ""
  })
    const category= "Blog"

    const uploadUser = async(id) => {
      const res = await axios.get("http://localhost:80/v1/users/"+id, {withCredentials: true})
      setUser({
        nombre: res.data.data.nombre,
        apellido: res.data.data.apellidoPat
      })
    }
    useEffect(() => {
      uploadUser(props.creado)
    }, [])

    function convertirFecha(fechaISO) {
      var fecha = new Date(fechaISO);
      fecha.setUTCHours(fecha.getUTCHours() - 6);
      var año = fecha.getFullYear();
      var mes = ('0' + (fecha.getUTCMonth() + 1)).slice(-2);
      var dia = ('0' + fecha.getUTCDate()).slice(-2);
      var fechaFormateada = dia + '-' + mes + '-' + año;
    
      return fechaFormateada;
    }
    const fecha = convertirFecha(props.fecha)
  return (
    <div className='datos_blog__container'>
        <p className='datos_blog_text'>{user.nombre +" "+user.apellido+" | "+fecha + " | "+ category}</p>
    </div>
  )
}

export default DatosCardBlog