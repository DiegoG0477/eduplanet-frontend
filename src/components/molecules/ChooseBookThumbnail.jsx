"use client";
import { useState, useEffect } from "react";
import Img from "next/image";
import ButtonUploadAgainImg from "../ButtonUploadAgainImg";

export default function ChooseBookThumbnail(props) {
    const [file, setFile] = useState(null);

    useEffect(() => {
        setFile(props.value);
    }
    , [props.value]);

    return (
        <div className="input-thumbnail-book">
            {file == null ? (
                <div className="input-thumbnail-button">
                    <input
                        type="file"
                        accept="image/*"
                        name={props.name}
                        onChange={(e) => {
                            props.method(e.target.files[0]);
                            setFile(e.target.files[0]);
                        }}
                    />
                    <span className="material-symbols-outlined">
                        add_circle
                    </span>
                    <p>Agregar Portada</p>
                </div>
            ) : (
                <>
                    <div className="upload_again_button">
                        <ButtonUploadAgainImg
                            fun={props.method}
                            guardarFile={setFile}
                        />
                    </div>
                    <Img
                        src={
                            (props.edit && file.toString().includes("https://res.cloudinary.com/")) ? file  :
                            URL.createObjectURL(file)
                        }
                        alt="agregar"
                        width={300}
                        height={100}
                        style={{ width: "100%", height: "100%" }}
                        className="img_agregada"
                    />
                </>
            )}
        </div>
    );
}
