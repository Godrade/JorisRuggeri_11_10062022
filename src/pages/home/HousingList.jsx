import React from "react";
import { HousingListItem } from "./HousingListItem";

export const HousingList = ({ housings }) => {
    return (
        <div className="list-location">
                    {housings.map(housing => {
                        return <HousingListItem cover={housing.cover} description={housing.description} title={housing.title} id={housing.id} />
                    })}
                </div>
    )
}