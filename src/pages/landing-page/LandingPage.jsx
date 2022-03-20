import React from "react";
import "./landing-page.css";
import cardImage from "../../assets/images/hero.jpg";
import { Category } from "../../components";
import { categoryDataList } from "../../data";

const LandingPage = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-wrapper">
            <div className="hero-text-container">
              <h1>YOGA ACCESSORIES</h1>
              <p className="text-xl text-gray">UP TO 30% OFF</p>
              <p>
                Top deals on yoga mats, cotton shirts and pants. Find your best
                size at affordable price. No cost EMI. Complete Protection.
              </p>
              <a className="btn btn-primary" href="#category">
                Explore Now
              </a>
            </div>
            <div className="hero-img-container">
              <img className="image-resp" src={cardImage} alt="hero" />
            </div>
          </div>
        </section>

        <section id="category" className="m-top-bottom">
          <h2 className="text-center">CATEGORIES</h2>
          <div className="category-container">
            {categoryDataList.map((item) => (
              <Category key={item.id} categoryData={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
