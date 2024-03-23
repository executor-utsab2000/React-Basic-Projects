import React from "react";
import imgLogo from '../Images/logo.jpg'
import styles from './Navbar.module.css'


export default function Navbar(){

    return(

        <nav class={`navbar navbar-expand-lg navbar-light bg-transperant ${styles.navbar}`}>
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={imgLogo} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item me-3">
                <a class="nav-link " aria-current="page" href="#">𝐇𝐎𝐌𝐄</a>
                </li>
                <li class="nav-item me-3">
                <a class="nav-link" href="#">𝐀𝐁𝐎𝐔𝐓</a>
                </li>
                <li class="nav-item me-3">
                <a class="nav-link" href="#">𝐂𝐎𝐍𝐓𝐀𝐂𝐓</a>
                </li>
               
            </ul>
            </div>
        </div>
</nav>

    )

}