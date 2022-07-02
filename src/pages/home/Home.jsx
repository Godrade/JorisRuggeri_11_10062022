import React from "react";
import data from "../../data/data.json";

import { HousingList } from "./HousingList";
import { Banner } from "../../components/Banner";

//BANNER IMG
import BannerIMG from "../../images/IMG.svg"

export const Home = () => {
    return (<section>
        <Banner url={BannerIMG} title="Chez vous, partout et ailleurs" />

        <section className="container-grey">
                <HousingList housings={data} />
        </section>
    </section>)
}