import logo from './logo.svg';
import React, { cloneElement } from 'react';
import "./CSS/Component.css"
import "./CSS/Theme.css";
import "./CSS/Class.css";

export default function Navbar() {
  return (
    <div id="Navbar">
        <div class="flex-center-children" style={{ width:"15%", height:'100%', }}>
            <img src={logo} alt="react-logo" style={{ height:'56px', }} />
            <h2>favianl0h</h2>
        </div>
        <div id="Navbar-Contents">
            <div id="ContactButton" class="navbar-item">
                <h2>Contact</h2>
            </div>
            <h2 class="navbar-item">Passions</h2>
            <h2 class="navbar-item">Academic</h2>
            <h2 class="navbar-item">Now</h2>
            <h2 class="navbar-item">About</h2>
        </div>
        
    </div>
  );
};