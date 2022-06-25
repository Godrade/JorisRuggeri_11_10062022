import React from "react";
import data from "../../data/data.json";

import { HousingList } from "./HousingList";
import { Banner } from "../../components/Banner";

export const Home = () => {
    return (<section>
        <Banner url="../../images/IMG.svg" title="Chez vous, partout et ailleurs" />

        <section class="container-grey">
                <HousingList housings={data} />
        </section>
    </section>)
}