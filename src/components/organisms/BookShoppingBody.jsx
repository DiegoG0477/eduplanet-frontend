"use client";
require('dotenv');
import Img from "next/image";
import Feature from "../molecules/Feature";
import ShoppingButton from "../molecules/ShoppingButton";
import BookShoppingDescription from "@/components/organisms/BookShoppingDescription";
import PurchasedPriceStatus from "../molecules/PurchasedPriceStatus";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BookShoppingBody(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});
    
    const getBook = async () => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST}/v1/materials/${id}`,
            { withCredentials: true }
        );
        setBook(res.data.data);
        console.log(res.data);
    };

    const handleBuyOrder = async () => {
        const res = await axios.post(
            process.env.NEXT_PUBLIC_HOST + "/v1/payment/create-order",
            { price: book.precio, title: book.titulo },
        );

        console.log(res.data);
        window.location.href = res.data.links[1].href;
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <>
            <div className="book-shopping-body">
                <Img src={book.portadaLibroUrl} className="book-shopping-image" height={300} width={100} />
                <div className="book-shopping-data">
                    <h1 className="book-shopping-title">{book.titulo}</h1>
                    {props.status == "purchased" ? (
                        <PurchasedPriceStatus />
                    ) : (
                        <h2 className="book-shopping-price">{`$${book.precio}`}</h2>
                    )}

                    <div className="book-shopping-features">
                        <div className="features">
                            <Feature
                                spanText={"book_2"}
                                featureText={book.editorial}
                            />
                            <Feature
                                spanText={"person"}
                                featureText={book.autor}
                            />
                            <Feature
                                spanText={"calendar_month"}
                                featureText={`Año: ${book.anioMaterial}`}
                            />
                        </div>

                        <div className="features" style={{ marginLeft: "3vw" }}>
                            <Feature
                                spanText={"description"}
                                featureText={book.numeroPaginas}
                            />
                            <Feature
                                spanText={"download"}
                                featureText={"Descarga Digital"}
                            />
                        </div>
                    </div>

                    {props.status == "purchased" ? (
                        <div className="shopping-buttons">
                            <ShoppingButton
                                buttonText={"Descargar"}
                                colorBackground={"#2E3898"}
                                spanText={"download"}
                            />
                        </div>
                    ) : (
                        <div className="shopping-buttons">
                            <ShoppingButton
                                buttonText={"Agregar"}
                                colorBackground={"#2E3898"}
                                spanText={"add_shopping_cart"}
                            />
                            <ShoppingButton
                                buttonText={"Comprar"}
                                colorBackground={"#4655DC"}
                                onClick={handleBuyOrder}
                                spanText={"monetization_on"}
                            />
                        </div>
                    )}
                </div>
            </div>

            <BookShoppingDescription description={book.descripcion} />
        </>
    );
}
