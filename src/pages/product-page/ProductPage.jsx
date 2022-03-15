import "./product-page.css";
import { Navigation, Footer, CardVertical, AsideBar } from "../../components";
import { useProductContext } from "../../context";

const ProductPage = () => {
  const { productsList } = useProductContext();

  return (
    <div className="wrapper">
      <Navigation />
      <AsideBar />

      <main className="product-page-main">
        <h3>All Products</h3>
        <div className="product-container">
          {productsList.map((item) => (
            <CardVertical
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
