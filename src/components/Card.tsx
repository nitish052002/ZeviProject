import React from "react";
import "./card.scss";
interface card {
  url: string;
  desc: string;
}
function Card({ url, desc }: card) {
  return (
    <div className="container">
      <img src={url} alt={desc} className="photo" />

      <div className="content">
        <p className="title">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
