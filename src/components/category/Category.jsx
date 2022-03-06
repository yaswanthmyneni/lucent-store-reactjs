import React from "react";
import "./category.css";

const Category = ({categoryData}) => {
  const {name, image:{src,alt}} = categoryData;
  return (
    <a href="#">
      <div className="category-pos-rel">
        <div className="category-img-container">
          <img className="image-resp" src={src} alt={alt} />
        </div>
        <h3 className="category-overlay">{name}</h3>
      </div>
    </a>
  );
};
export { Category };
