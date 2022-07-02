import React from "react";

export const Banner = ({ url, title }) => {
    return (
        <div className="bc-img">
            <img src={url} alt="Banniere" />
            {title && <h2>{title}</h2>}
        </div>
    )
}