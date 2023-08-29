import React from "react";
import zaferes from "../assets/zaferes.png";
import star from "../assets/star.png";

function Card() {
  return (
    <div className="cards-container">
      <div className="card-container">
        <img className="card-image" src={zaferes} alt="" />
        <div className="card-info-container">
          <p className="card-rating">
            <img src={star} alt="" />
            5.0
          </p>
          <p>(6)</p>
          <p>• USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
