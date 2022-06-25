import React from "react";
import { useParams } from "react-router-dom";

//IMPORT DATA & FIND LE BON PROFIL VIA ID

export const Housing = () => {
    let { id } = useParams();
    return (<div>{id}</div>)
}