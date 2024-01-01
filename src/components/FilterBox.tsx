import React, { useState } from "react";
import "./filterbox.scss";
import Rating from "./Rating";

interface Brand {
  brandList: string[];
  onClickHandler: (name: any, value: any) => void;
}

/**

@property (array) brandlist - list of the all brands to filter
@property (function) onClickHandler - function to update query object in app component

*/

function FilterBox({ brandList, onClickHandler }: Brand) {
  const [activeOptionItem, setActiveOptionItem] = useState(0);

  const expandOptions = (num: number) => {
    if (activeOptionItem > 0) {
      setActiveOptionItem(0);
    } else {
      setActiveOptionItem(num);
    }

    console.log(activeOptionItem);
  };
  return (
    <div className="filterbox">
      <div className="filter-item brand-filter">
        <div
          className="title"
          onClick={() => {
            expandOptions(1);
          }}
        >
          BRAND
        </div>
        <div
          className={`filterOption ${activeOptionItem === 1 ? "active" : ""}`}
        >
          {brandList.map((brand) => (
            <div className="checkbox-wrapper-46" key={brand}>
              <input
                className="inp-cbx"
                id={brand}
                type="checkbox"
                onChange={() => {
                  onClickHandler("brand", brand);
                }}
                name={brand}
              />
              <label className="cbx" htmlFor={brand}>
                <span>
                  <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>{brand}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="price-filter filter-item">
        <div
          className="title"
          onClick={() => {
            expandOptions(2);
          }}
        >
          PRICE RANGE
        </div>
        <div
          className={`filterOption ${activeOptionItem === 2 ? "active" : ""}`}
        >
          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="under-500"
              type="checkbox"
              value={500}
              onChange={() => {
                onClickHandler("underFive", 500);
              }}
            />
            <label className="cbx" htmlFor="under-500">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>Under 500</span>
            </label>
          </div>

          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="btw-1000-10000"
              type="checkbox"
              name="price"
              value={1000}
              onChange={() => {
                onClickHandler("price", 1000);
              }}
            />
            <label className="cbx" htmlFor="btw-1000-10000">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>1000 to 3000</span>
            </label>
          </div>
        </div>
      </div>

      <hr />
      {/* Rating Filter Section */}
      <div className="rating-filter filter-item">
        <div
          className="title"
          onClick={() => {
            expandOptions(3);
          }}
        >
          RATING
        </div>
        <div
          className={`filterOption ${activeOptionItem === 3 ? "active" : ""}`}
        >
          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="5-star"
              type="checkbox"
              onChange={() => {
                onClickHandler("rating", 1);
              }}
            />
            <label className="cbx" htmlFor="5-star">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>

              <div className="rating">
                <Rating all={true} />
              </div>
            </label>
          </div>
        </div>

        <div
          className={`filterOption ${activeOptionItem === 3 ? "active" : ""}`}
        >
          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="4-star"
              type="checkbox"
              onChange={() => {
                onClickHandler("rating", 2);
              }}
            />
            <label className="cbx" htmlFor="4-star">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>

              <div className="rating">
                <Rating first={true} second={true} third={true} fourth={true} />
              </div>
            </label>
          </div>
        </div>

        <div
          className={`filterOption ${activeOptionItem === 3 ? "active" : ""}`}
        >
          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="3-star"
              type="checkbox"
              onChange={() => {
                onClickHandler("rating", 3);
              }}
            />
            <label className="cbx" htmlFor="3-star">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>

              <div className="rating">
                <Rating first={true} second={true} third={true} />
              </div>
            </label>
          </div>
        </div>

        <div
          className={`filterOption ${activeOptionItem === 3 ? "active" : ""}`}
        >
          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="2-star"
              type="checkbox"
              onChange={() => {
                onClickHandler("rating", 2);
              }}
            />
            <label className="cbx" htmlFor="2-star">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>

              <div className="rating">
                <Rating first={true} second={true} />
              </div>
            </label>
          </div>
        </div>

        <div
          className={`filterOption ${activeOptionItem === 3 ? "active" : ""}`}
        >
          <div className="checkbox-wrapper-46">
            <input
              className="inp-cbx"
              id="1-star"
              type="checkbox"
              onChange={() => {
                onClickHandler("rating", 1);
              }}
            />
            <label className="cbx" htmlFor="1-star">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>

              <div className="rating">
                <Rating first={true} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
