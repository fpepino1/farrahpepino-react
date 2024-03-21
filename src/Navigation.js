import React from "react";
import "./Navigation.css";
import logo from "./logo2.png";

function Navigation() {
    return(
        <div className="Navigation">
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className= "logo" alt="logo" src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">RESUME</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PROJECTS
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">FEATURED</a></li>
            <li><a class="dropdown-item" href="#">ALL</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navigation;