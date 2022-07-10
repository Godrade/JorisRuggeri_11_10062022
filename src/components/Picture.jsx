import React from "react";

export const Picture = ({ url, alt}) => {
    return (
        <>
            <img src={url} alt={alt} />
        </>
    )
}