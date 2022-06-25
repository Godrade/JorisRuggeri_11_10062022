import React from "react";
import { Link } from "react-router-dom";

export const HousingListItem = ({cover, description, title, id}) => {
    return (<Link to={`housing/${id}`} className="item-location">
                <img src={cover} alt={description} />
                <p>{title}</p>
            </Link>) 
}