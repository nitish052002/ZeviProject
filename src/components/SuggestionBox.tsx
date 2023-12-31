import React from "react";
import "./suggestion.scss";
import products from "../db/suggestion.json";
import Card from "./Card";
import { Link } from "react-router-dom";

type check = {
  active: boolean;
};

/*
@active - boolean - if active is true filter box will be display

*/

function SuggestionBox({ active }: check) {
  return (
    <div className={`suggestion-box ${active ? "active" : ""}`}>
      <p className="heading">Latest Trends</p>
      <div className="products">
        {products.data.map(({ imgURL, desc,id }) => (
          <Link  key={id} to="/products"><Card url={imgURL} desc={desc} /></Link>
        ))}
      </div>
      <div className="suggestions">
        <h2 className="heading">Popular Suggestions</h2>

        <ul className="list">
          <li>
            <Link key="Fog Scent Xpressio Perfume" to="/products">Fog Scent Xpressio Perfume</Link>
          </li>
          <li>
            <Link key="HP Pavilion 15-DK1056WM" to="/products">HP Pavilion 15-DK1056WM</Link>
          </li>
          <li>
            <Link key="Huawei P30" to="/products">Huawei P30</Link>
          </li>
          <li>
            <Link key="Microsoft Surface Laptop 4" to="/products">Microsoft Surface Laptop 4</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SuggestionBox;
