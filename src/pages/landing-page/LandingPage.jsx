import React, { useState, useEffect } from "react";
import "./landing-page.css";
import cardImage from "../../assets/images/hero.jpg";
import { CategoryCard } from "../../components";
import { apiCall } from "../../utility";
import { v4 as uuid } from "uuid";
import { useToastContext } from "../../context";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [categoryList, setCategoryList] = useState([]);

  // from toast context
  const { toastDispatch } = useToastContext();

  // from react-router-dom
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response = await apiCall("get", "/api/categories");
        if (response.status === 200) {
          setCategoryList(response.data.categories);
        }
      })();
    } catch (error) {
      console.error(error);
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-error",
          message: "error! check console",
        },
      });
    }
  }, [toastDispatch]);

  return (
    <>
      <main className="landing-page-container">
        <section className="hero">
          <div className="hero-wrapper">
            <div className="hero-text-container">
              <h1>YOGA ACCESSORIES</h1>
              <p className="text-xl text-gray">UP TO 30% OFF</p>
              <p>
                Top deals on yoga mats, cotton shirts and pants. Find your best
                size at affordable price. No cost EMI. Complete Protection.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/products")}
              >
                Shop Now
              </button>
            </div>
            <div className="hero-img-container">
              <img className="image-resp" src={cardImage} alt="hero" />
            </div>
          </div>
        </section>

        <section id="category" className="m-top-bottom">
          <h2 className="text-center">CATEGORIES</h2>
          <div className="categories-container">
            {categoryList.map((item, index) => (
              <CategoryCard key={item._id} categoryData={item} index={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
