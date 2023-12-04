"use client";
require('dotenv');
import React, { useState, useEffect } from "react";
import GenericCard from "./GenericCard";
import BlogGenericCard from "./BlogGenericCard.jsx";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ViewAll(props) {
    const [data, setData] = useState([]);
    const apiRoute = props.apiRoute;
    const [cardsPerGroup, setCardsPerGroup] = useState(5);
    const type = props.typeData;
    var array = [];

    const loadData = async () => {
        try {
            console.log(process.env.NEXT_PUBLIC_HOST + apiRoute);
            const response = await axios.get(process.env.NEXT_PUBLIC_HOST + apiRoute, {
                withCredentials: true,
            });

            array = response.data.data;
            console.log(array);
            setData(response.data.data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const goStoreEdit = (id) => {
        router = useRouter();
        router.push(`/store/add/${id}`);
    };

    useEffect(() => {
        loadData();

        if(type === "blog"){
            setCardsPerGroup(3);
        }
    }, []);

    const totalCards = data.length;
    const [currentGroup, setCurrentGroup] = useState(1);
    const previousGroup = currentGroup - 1;
    const nextGroup = currentGroup + 1;
    const startCard = (currentGroup - 1) * cardsPerGroup;
    const endCard = currentGroup * cardsPerGroup;

    const cardsToShow = data.map((item, index) => {
        if (index >= startCard && index < endCard) {
            return ((type === "book") ? (
                <GenericCard
                    key={index}
                    title={item.titulo}
                    image={item.portada_libro}
                    price={item.precio}
                    route={`${props.route}${item.id_material}`}
                />
            ) : (type === "blog") ? (
                <BlogGenericCard
                    key={index}
                    title={item.titulo}
                    image={item.url_imagen}
                    route={`${props.route}${item.id_blog}`}
                />
            ) : (null));
        }
        return null;
    });

    const handleNextGroup = () => {
        if (currentGroup < Math.ceil(totalCards / cardsPerGroup)) {
            setCurrentGroup(currentGroup + 1);
        }
    };

    const handlePreviousGroup = () => {
        if (currentGroup > 1) {
            setCurrentGroup(currentGroup - 1);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentGroup]);

    return (
        <div className="all-items-body">
            <div>
                <h1 className="all-items-title">Todos los artículos</h1>

                {/* <div className="items-search-bar">
                    <input
                        type="text"
                        className="items-search-input"
                        placeholder="Buscar..."
                    />
                    <button className="items-search-button">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div> */}

                {
                    (type === "blog") ? (
                        <div className="blog_contain_search">{cardsToShow}</div>
                    ) : (<div className="contain_search">{cardsToShow}</div>)
                }
              
            </div>

            
            <div className="contain_navigate">
                <button
                    className="button_navigate"
                    onClick={handlePreviousGroup}
                    disabled={currentGroup === 1}
                >
                    Anterior
                </button>
                <div className="page-counter">
                    <span className={previousGroup > 0 ? "page-number" : ""}>
                        {previousGroup > 0 ? previousGroup : ""}
                    </span>
                    <span className={`page-number current-page`}>
                        {currentGroup}
                    </span>
                    <span
                        className={
                            nextGroup <= Math.ceil(totalCards / cardsPerGroup)
                                ? "page-number"
                                : ""
                        }
                    >
                        {nextGroup <= Math.ceil(totalCards / cardsPerGroup)
                            ? nextGroup
                            : ""}
                    </span>
                </div>
                <button
                    className="button_navigate"
                    onClick={handleNextGroup}
                    disabled={
                        currentGroup === Math.ceil(totalCards / cardsPerGroup)
                    }
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
