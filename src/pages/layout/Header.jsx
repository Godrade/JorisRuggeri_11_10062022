import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
      };

    return (<header>
        <nav>
            <div class="logo">
                <img src="assets/image/LOGO.svg" alt="Logo Kasa" />
            </div>
            <div class="nav-list">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined }>Accueil</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined }>A Propos</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>)
}