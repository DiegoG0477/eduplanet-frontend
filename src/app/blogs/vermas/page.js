import Img from "next/image";
import imagen from "@/public/assets/card-example.jpg";
import TextSubitleBlog from "@/components/TextSubitleBlog";
function verMasBlog() {
  const subtitle = "La importancia de la comunicación entre familias y escuela";
  const text =
    "La comunicación entre hogares y escuelas es un factor clave para el bienestar de los niños y las niñas, así como para el éxito de su proceso educativo. Sin embargo, muchas veces esta comunicación es deficiente, inadecuada o inexistente, lo que genera conflictos, malentendidos y desconfianza entre las partes. Para evitar estos problemas y lograr una comunicación eficaz entre hogares y escuelas, es necesario seguir una serie de pautas que nos ayuden a establecer un diálogo constructivo, respetuoso y colaborativo. En este artículo, nos basamos en las aportaciones de Vidal Schmill, pedagogo y especialista en desarrollo humano, para ofrecerte el ABC de la comunicación eficaz entre hogares y escuelas.";
  const subtitle2 = "Abrir canales ágiles de comunicación";
  const text2 =
    "Tanto las escuelas como las familias deben contar con canales ágiles de comunicación que les permitan informarse, consultar y resolver dudas o problemas de manera rápida y oportuna. Estos canales pueden ser presenciales, telefónicos, digitales o mixtos, pero deben garantizar la atención veloz por personal calificado y la información completa y veraz.Asimismo, es importante que tanto las escuelas como las familias hagan un uso inteligente de estos canales, solicitando y ofreciendo la comunicación cuando realmente sea necesario, sin abusar ni descuidarlos. Además, se debe evitar el uso de las redes sociales como medio para difundir rumores, quejas o críticas que no contribuyen a la solución de los problemas, sino que los agravan.";
  const subtitle3 = "Respeto mutuo";
  const text3 =
    "El respeto mutuo es la base de toda comunicación eficaz entre hogares y escuelas. Esto implica reconocer el valor y la importancia del trabajo que realizan cada una de las partes, así como sus derechos y responsabilidades. También implica expresarse con cortesía, educación y consideración, evitando los insultos, las amenazas, las ironías o las descalificaciones.El respeto mutuo también supone confiar en que tanto las escuelas como las familias están a favor de los niños y las niñas, y que buscan su bienestar y su desarrollo. Por ello, se debe evitar caer en actitudes defensivas, acusatorias o victimistas, y optar por una postura abierta, dialogante y colaborativa.";
  const subtitle4 = "Colaborar para resolver problemas";
  const text4 =
    "La comunicación entre hogares y escuelas no debe limitarse a transmitir información o a reportar incidencias, sino que debe orientarse a buscar soluciones conjuntas y colaborativas a los problemas que puedan surgir. Para ello, es necesario que tanto las escuelas como las familias ofrezcan alternativas de solución viables y realistas, que impliquen el compromiso y la participación activa de ambas partes.Además, es fundamental que tanto las escuelas como las familias den seguimiento a las soluciones acordadas, evaluando su efectividad y realizando los ajustes necesarios. Asimismo, se debe reconocer y validar el esfuerzo y el apoyo que cada una de las partes brinda a los niños y las niñas.";
  const subtitle5 = "Construir comunidad";
  const text5 =
    "La comunicación eficaz entre hogares y escuelas no solo se da en situaciones problemáticas o conflictivas, sino también en momentos de celebración, convivencia y aprendizaje compartido. Por ello, es importante que tanto las escuelas como las familias realicen dinámicas y actividades que construyan comunidad e involucren a todos los miembros. Estas dinámicas y actividades pueden ser de tipo académico, cultural, deportivo o social, pero deben tener como objetivo fomentar el conocimiento mutuo, la confianza, la cooperación y la solidaridad entre hogares y escuelas. Así se crea un clima positivo y favorable para el desarrollo integral de los niños y las niñas.";
  const subtitle6 = "Conclusión";
  const text6 =
    "La comunicación eficaz entre hogares y escuelas es un reto que requiere de la voluntad, el compromiso y la responsabilidad de ambas partes. Siguiendo el ABC que te hemos presentado, podrás lograr una comunicación que beneficie a los niños y las niñas, y que fortalezca la relación entre las familias y los educadores. Recuerda que la escuela y el hogar son aliados, no enemigos, y que juntos pueden hacer una gran diferencia en la vida de los niños y las niñas. ¡Comunícate eficazmente!";
  return (
    <div className="body_blog">
      <h1 className="title_vermas">
        El ABC de la comunicación eficaz entre familias y escuelas
      </h1>
      <Img src={imagen} alt="imagen del blog" className="img_blog_vermas" />
      <TextSubitleBlog subtitle={subtitle} text={text} />
      <TextSubitleBlog subtitle={subtitle2} text={text2}/>
      <TextSubitleBlog subtitle={subtitle3} text={text3}/>
      <TextSubitleBlog subtitle={subtitle4} text={text4}/>
      <TextSubitleBlog subtitle={subtitle5} text={text5}/>
      <TextSubitleBlog subtitle={subtitle6} text={text6}/>
    </div>
  );
}

export default verMasBlog;
