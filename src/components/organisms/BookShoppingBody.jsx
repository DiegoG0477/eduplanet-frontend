import Img from "next/image";
import BookShopping from "@/public/assets/preescolar-example.png";
import Feature from "../molecules/Feature";
import ShoppingButton from "../molecules/ShoppingButton";
import BookShoppingDescription from "@/components/organisms/BookShoppingDescription";
import PurchasedPriceStatus from "../molecules/PurchasedPriceStatus";

export default function BookShoppingBody(props) {
    return (
        <>
            <div className="book-shopping-body">
                <Img src={BookShopping} className="book-shopping-image" />
                <div className="book-shopping-data">
                    <h1 className="book-shopping-title">
                        Educación Preescolar - Material didáctico guía profesor
                    </h1>
                    { (props.status == "purchased") ?
                        (<PurchasedPriceStatus/>)
                    :
                        (<h2 className="book-shopping-price">$347.78</h2>)}

                    <div className="book-shopping-features">
                        <div className="features">
                            <Feature spanText={"book_2"} featureText={"Editorial Santillana"}/>
                            <Feature spanText={"person"} featureText={"Autor Tal"}/>
                            <Feature spanText={"calendar_month"} featureText={"Año: 2023"}/>
                        </div>

                        <div className="features" style={{marginLeft:"3vw"}}>
                            <Feature spanText={"description"} featureText={"234 Páginas"}/>
                            <Feature spanText={"download"} featureText={"Descarga Digital"}/>
                        </div>

                    </div>

                    { (props.status == "purchased") ? 
                        (<div className="shopping-buttons">
                            <ShoppingButton buttonText={"Descargar"} colorBackground={"#2E3898"} spanText={"download"}/>
                        </div>) 
                    : 
                        (<div className="shopping-buttons">
                            <ShoppingButton buttonText={"Agregar"} colorBackground={"#2E3898"} spanText={"add_shopping_cart"}/>
                            <ShoppingButton buttonText={"Comprar"} colorBackground={"#4655DC"} spanText={"monetization_on"}/>
                        </div>)}
                </div>
            </div>

            <BookShoppingDescription description={`A través de escenas, los niños pueden descubrir la experiencia
            de ir a su primera escuela. Desde que se despiden de sus padres
            a la entrada de la escuela, pasando por las actividades en
            clase, la hora del lunch, el recreo, los festejos hasta la hora
            de salida. Se trata de un libro interactivo que incluye
            preguntas a los niños sobre lo que ve en las ilustraciones.`}/>
        </>
    );
}
