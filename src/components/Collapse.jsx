import React, { useState } from "react";

export const Collapse = ({ title, content, width }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <span>{title}</span>
                <span className="float-right" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
            </div>
            <div className="dropdown-description" style={{display:isOpen ? '' : 'none'}}>
                {content}
            </div>
        </div>
    )
}