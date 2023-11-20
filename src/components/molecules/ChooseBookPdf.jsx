"use client";
import { useState } from "react";
import ButtonUploadAgainImg from "../ButtonUploadAgainImg";

export default function ChooseBookPdf(props) {
    const [file, setFile] = useState(null);

    return (
        <div className="input-thumbnail-book input-pdf">
            {file == null ? (
                <div className="input-thumbnail-button input-pdf-button">
                    <input
                        type="file"
                        accept=".pdf"
                        name={props.name}
                        onChange={(e) => {
                            props.method(e.target.files[0]);
                            setFile(e.target.files[0]);
                        }}
                    />
                    <span className="material-symbols-outlined">upload</span>
                    <p>Subir PDF</p>
                </div>
            ) : (
                <>
                    <div
                        className="input-thumbnail-book input-pdf"
                        style={{
                            background: "#2BB060",
                            border: "none",
                            marginTop: "0",
                        }}
                    >
                        <div className="upload_again_button">
                            <ButtonUploadAgainImg
                                fun={props.method}
                                guardarFile={setFile}
                            />
                        </div>
                        <h5 style={{ color: "white" }}>{file.name}</h5>
                    </div>
                </>
            )}
        </div>
    );
}
