import React from "react";
import { NavLink } from "react-router-dom";

//NAV LOGO
import LogoNav from "../../images/LOGO.svg"

export const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
      };

    return (<header>
        <nav>
            <div className="logo">
                <img src={LogoNav} alt="Logo Kasa" />
            </div>
            <div className="nav-list">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined }>Accueil</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined }>A Propos</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>)
}