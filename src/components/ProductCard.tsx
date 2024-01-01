import React, { useState } from "react";
import "./productcard.scss";
import img from "../assests/img/img.jpg";
import Rating from "./Rating";

interface ProductItem {
  title: string;
  id: number;
  description?: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand?: string;
  stock?: number;
  category?: string;
  thumbnail: string;
  images?: string[];
}

interface Obj {
  productData: Partial<ProductItem>;
}



/**
* @typedef {Object} productData - Data on product available to buy
*
* @property {string} name - The name or title of the product
* @property {string} price - The price of the product
* @property {number} discountedPrice - discounted price of the product 
* @property {number} rating - The aggregate rating of the product (integer out of five)
* @property {string} image - Contains URL for the product image
* @property {string} _id - Unique ID for the product
* 


*/
function ProductCard({ productData }: Obj) {
  const [turnRed, setTurnRed] = useState(false);
  return (
    <div className="productcard__container" key={productData.id}>
      <div className="image-container">
        <img src={productData.thumbnail} alt="" />
        <div
          className={`wishlistButton hollow ${turnRed ? "hide  " : ""}`}
          onClick={() => {
            setTurnRed(!turnRed);
          }}
        >
          <i className="bx bx-heart bx-md"></i>
        </div>
        <div
          className={`wishlistButton fill ${turnRed ? "red" : ""}`}
          onClick={() => {
            setTurnRed(!turnRed);
          }}
        >
          <i className="bx bxs-heart bx-md"></i>
        </div>
        <div className="viewButton">
          <button>View Product</button>
        </div>
      </div>

      <div className="productcard__content">
        <p className="productcard__title">{productData.title}</p>
        <s className="productcard__original">
          {productData.discountPercentage}
        </s>
        <span className="productcard__discount-price">
          Rs.{productData.price}
        </span>
        <div className="productcard__rating">
          <div className="stars">
            <Rating all={true} />
          </div>
          <div className="total__rating">({productData.rating})</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
