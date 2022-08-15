import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import data from "../../data/data.json";

import { Collapse } from "../../components/Collapse";
import { Gallery } from "../../components/Gallery";
import { Picture } from "../../components/Picture";
import { Tag } from "./Tag";
import { Ratings } from "../../components/Ratings";


export const Housing = () => {
    let { id } = useParams();
    const housing = data.find(number => number.id === id);

    const navigate = useNavigate()
    useEffect(() => {
        if (!housing){
            navigate("/404", { replace: true });
        }
    }, [housing, navigate]);
    if(!housing) return

    const firstName = housing.host.name.split(' ')[0]
    const lastName = housing.host.name.split(' ')[1]

    return(
        <div>
            <Gallery pictures={housing.pictures} />
            
            <section className="housing-detail">
                <div className="w-2">
                    <p className="housing-title">{housing.title}</p>
                    <p className="housing-location">{housing.location}</p>

                    {housing.tags.map(tag =>
                        <Tag key={tag} tag={tag} />
                    )}
                </div>

                <div className="housing-content">
                    <div className="housing-avatar">
                        <span className="host-name">{firstName} <br /> {lastName} </span>
                        <div className="host-picture">
                            <Picture url={housing.host.picture} alt="Default Text" />
                        </div>
                    </div>
                    <Ratings rating={housing.rating} />
                </div>
            </section>

            <div className="housing-collapse">
                <Collapse title='Description'>{housing.description}</Collapse>
                <Collapse title='Equipement'><ul>{housing.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}</ul></Collapse>
            </div>
        </div>
        )
}