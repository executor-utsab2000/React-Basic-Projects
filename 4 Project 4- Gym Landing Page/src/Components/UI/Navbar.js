import React from "react";
import navbarStyle from './Navbar.module.css'
import logo from './logo.png'


export default function Navbar(){
    return(

            
                <nav className={`navbar navbar-expand-lg navbar-light bg-transperant ${navbarStyle.navbar} `}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt=""  className={navbarStyle.logoImg} style={{width: 2}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Landing</a>
                        </li>          
                    </ul>
                    </div>
                </div>
                </nav>

    )
}