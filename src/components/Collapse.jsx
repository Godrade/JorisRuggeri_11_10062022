import React, { useState } from "react";

export const Collapse = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div class="dropdown">
            <div class="dropdown-title">
                <span>{title}</span>
                <span class="float-right" onClick={() => setIsOpen(true)}>{isOpen ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span>
            </div>
            <div class="dropdown-description" style={{display:isOpen ? '' : 'none'}}>
                {content}
            </div>
        </div>
    )
}