import React from "react";
import { useParams } from "react-router-dom";

import data from "../../data/data.json";

import { Collapse } from "../../components/Collapse";
import { Gallery } from "../../components/Gallery";
import { Picture } from "../../components/Picture";
import { Tag } from "./Tag";
import { Ratings } from "./Ratings";


export const Housing = () => {
    let { id } = useParams();
    const housing = data.find(number => number.id === id);

    const firstName = housing.host.name.split(' ')[0]
    const lastName = housing.host.name.split(' ')[1]

    return(
        <div>
            <Gallery pictures={housing.pictures} />
            
            <section className="d-flex">
                <div className="w-2">
                    <p className="housing-title">{housing.title}</p>
                    <p className="housing-location">{housing.location}</p>

                    {housing.tags.map(tag =>
                        <Tag tag={tag} />
                    )}
                </div>

                <div className="w-2">
                    <div className="d-flex housing-content">
                        <span className="host-name">{firstName} <br /> {lastName} </span>
                        <div className="host-picture">
                            <Picture url={housing.host.picture} alt="Default Text" />
                        </div>
                    </div>
                    <Ratings rating={housing.rating} />
                </div>
            </section>

            <div className="housing-collapse">
                <Collapse title='Description' content={housing.description} />
                <Collapse title='Equipement' content={<ul>{housing.equipments.map(equipment => <li>{equipment}</li>)}</ul>} />
            </div>
        </div>
        )
}