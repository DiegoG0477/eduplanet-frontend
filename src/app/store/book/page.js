import React from "react";
import Img from "next/image";
import BookShopping from "@/public/assets/preescolar-example.png";

export default function BookAdvance() {
    return (
        <div className="book-shopping-body">
            <div>
                <Img src={BookShopping} className="book-shopping-image" />
                
            </div>
        </div>
    );
}
