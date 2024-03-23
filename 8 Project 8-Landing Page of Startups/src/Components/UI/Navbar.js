import React from "react";
import navLogo from './Images/canva-brown-mascot-lion-free-logo-qJptouniZ0A-removebg-preview.png'
import NavStyles from './Navbar.module.css';



export default function Navbar(){
    return(



        <nav class={`navbar navbar-expand-lg navbar-light py-3  ${NavStyles.navbar}`}>
          <div class="container ">
            <a class="navbar-brand" href="#">
                <img src={navLogo} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item ">
                  <a class="nav-link mt-2" aria-current="page" href="#">Sign In</a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link" aria-current="page" href="#">
                    <button>Sign Up</button>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>












    )
}