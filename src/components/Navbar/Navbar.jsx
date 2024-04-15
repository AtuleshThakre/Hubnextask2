import React from "react";

import "./Navbar.css";

import menu_icons from '../../Assets/menu_icon.png'

import logo_two from '../../Assets/logotwo.png'
import logo_one from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg_blur navbar-dark">
        <div class="container-fluid ">
          <a class="navbar-brand" href="javascript:void(0)">
          <img src={logo_one} alt="" /><span  className="responsive_design">made by</span> <img className="responsive_design" src={logo_two} alt="" />
          </a>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <img src={menu_icons} className="img-fluid" style={{width:"30px"}} alt="" />
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav nav_color">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Customers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Updates</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Help</a>
              </li>
              <li class="nav-item">
              <button className=" btn  btn_box" >Get for free </button> &nbsp;&nbsp;&nbsp;

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
