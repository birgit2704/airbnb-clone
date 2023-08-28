import React from "react";
import heroImage from "../assets/Group77.png";

function Hero() {
  return (
    <div className="hero-container">
      <img className="hero-img" src={heroImage} alt="" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
