
import React from "react";
import './Navbar.css';


export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-transperant py-4">
            <div className="container-fluid">
                <a className="navbar-brand ps-4" href="https://www.nike.com/in/"><img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">



                <ul className="navbar-nav me-auto my-4 my-lg-0">
                    
                    <li className="nav-item ps-4">
                    <a className="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                   
                    <li className="nav-item ps-4">
                    <a className="nav-link" href="#">location</a>
                    </li>
                  
                    <li className="nav-item ps-4">
                    <a className="nav-link" href="#">about us</a>
                    </li>
                    <li className="nav-item ps-4">
                    <a className="nav-link" href="#">contact us</a>
                    </li>

                </ul>
               



                <form className="d-flex ps-4">                    
                    <button className="btn btn-danger px-4 py-2" type="submit">LOGIN</button>
                </form>
             </div>
            </div>
        </nav>      
    )
};