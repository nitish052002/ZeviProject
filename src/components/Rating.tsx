import React, { useState } from "react";
import "./rating.scss";

interface Rating {
  type: number;
}

interface Check {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
  all?: boolean;
}

/** 
 * @property {string} first - first star will be yellow
 * @property {string} second - first two star will be yellow
 * @property {number} third - first three star will be yellow
 * @property {number} fourth - first four will be yellow
 * @property {string} all - all star will be yellow
  
  
*/

function Rating({ first, second, third, fourth, all }: Partial<Check>) {
  return (
    <div className="rating-container">
      <div className="rating-wrapper">
        <div className={all === true ? "active" : ""}></div>
        <div
          className={
            (first === true &&
              second === true &&
              third === true &&
              fourth === true) ||
            all === true
              ? "active"
              : ""
          }
        ></div>
        <div
          className={
            (first === true && second === true && third === true) ||
            all === true
              ? "active"
              : ""
          }
        ></div>
        <div
          className={
            (first === true && second === true) || all === true ? "active" : ""
          }
        ></div>
        <div className={first === true || all === true ? "active" : ""}></div>
      </div>
    </div>
  );
}

export default Rating;
