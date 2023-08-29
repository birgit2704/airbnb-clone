import React from "react";
import star from "../images/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-image"
        src={`../../assets/${props.coverImg}`}
        alt=""
      />
      <div className="card-info-container">
        <p className="card-rating">
          <img src={star} alt="" />
          {props.stats.rating}
        </p>
        <p>({props.stats.reviewCount})</p>
        <p>• {props.location}</p>
      </div>
      <p>{props.title}</p>
      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
