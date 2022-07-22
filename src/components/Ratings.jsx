import React from "react";

import { Star } from "./Star";

export const Ratings = ({ rating }) => {

    return (
        <div className="rating-content">
            <Star isFilled={rating >= 1} />
            <Star isFilled={rating >= 2} />
            <Star isFilled={rating >= 3} />
            <Star isFilled={rating >= 4} />
            <Star isFilled={rating >= 5} />
        </div>
    )
}