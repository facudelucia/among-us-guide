import React from 'react'
import "./Navbar.css"
import {
    NavLink
  } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">
                <img src={require("./assets/img/among-us-23558-0.jpg")} width="30" height="30" alt="" loading="lazy" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/videos" className="nav-link">Videos útiles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contacto"className="nav-link" >Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
