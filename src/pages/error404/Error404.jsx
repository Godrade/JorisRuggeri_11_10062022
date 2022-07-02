import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <section className="container-error">
                <div className="error">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
    )
}