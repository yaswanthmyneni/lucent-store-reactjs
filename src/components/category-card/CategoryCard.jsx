import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context";
import "./category-card.css";

const CategoryCard = ({ categoryData, index }) => {
  const { productPageDispatch } = useProductContext();

  const { image, categoryName } = categoryData;

  const categoryArray = ["SHIRTS", "PANTS", "YOGA_MATS"];

  return (
    <Link
      to="/products"
      onClick={() =>
        productPageDispatch({ type: categoryArray[index], payload: true })
      }
      className="text-decoration-none"
    >
      <div className="category-container cursor">
        <div className="category-img-container">
          <img className="image-resp" src={image} alt="category" />
        </div>
        <h4>{categoryName}</h4>
      </div>
    </Link>
  );
};
export { CategoryCard };
