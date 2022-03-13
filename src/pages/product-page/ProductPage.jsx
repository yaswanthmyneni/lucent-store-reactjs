import "./product-page.css";
import { Navigation, Footer, Card, AsideBar } from "../../components";
import { productsList } from "../../data";

const ProductPage = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <AsideBar />

      <main className="product-page-main">
        <h3>All Products</h3>
        <div className="product-container">
          {productsList.map((item) => (
            <Card
              key={item.id}
              cardData={item}
              buttonPrimary="Add to cart"
              buttonSecondary="Add to wishlist"
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { ProductPage };
