import React, { useState } from "react";

export const Collapse = ({ title, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-title">
                <span>{title}</span>
                <span onClick={() => setIsOpen(!isOpen)}>{isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
            </div>
            <div className="collapse-description" style={{display:isOpen ? '' : 'none'}}>
                {children}
            </div>
        </div>
    )
}