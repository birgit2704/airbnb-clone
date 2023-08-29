import React from "react";
import star from "../images/star.png";

function Card({ img, rating, reviewCount, location, title, price }) {
  return (
    <div className="cards-container">
      <div className="card-container">
        <img className="card-image" src={`../../assets/${img}`} alt="" />
        <div className="card-info-container">
          <p className="card-rating">
            <img src={star} alt="" />
            {rating}
          </p>
          <p>({reviewCount})</p>
          <p>• {location}</p>
        </div>
        <p>{title}</p>
        <p>
          <strong>From ${price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
