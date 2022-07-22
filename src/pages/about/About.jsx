import React from "react";
import { Banner } from "../../components/Banner";
import { Collapse } from "../../components/Collapse";

import useWindowDimensions from "../../hooks/useWindowDimensions";

//BANNER IMG
import BannerIMG from "../../images/apropos.jpg";
import BannerIMGPhone from "../../images/apropos-phone.jpg";

export const About = () => {
    const { width } = useWindowDimensions();
    const isMobile = width <= 768;
    return (
        <>
            <Banner url={isMobile ? BannerIMGPhone : BannerIMG} className="banner-about" />

            <section className="container-collapse">
                <Collapse title='Fiabilité'><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p></Collapse>
                <Collapse title='Respect'><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></Collapse>
                <Collapse title='Service'><p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p></Collapse>
                <Collapse title='Sécurité'><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p></Collapse>
            </section>
        </>
    );
}