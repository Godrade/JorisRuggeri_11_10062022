import React from "react";

//IMAGE
import LogoFooter from '../../images/LOGO_FOOTER.svg';

export const Footer = () => {
    return (<footer>
    <div className="footer">
        <img src={LogoFooter} alt="Logo Kasa" />
        <p>© 2022 Kasa. All rights reserved</p>
    </div>
</footer>)
}