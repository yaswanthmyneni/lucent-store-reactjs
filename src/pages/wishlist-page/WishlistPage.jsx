import "./wishlist-page.css";
import { Navigation, Footer, Card } from "../../components";
import { productsList } from "../../data";

const WishlistPage = () => {
  return (
    <>
      <Navigation />

      <main className="wishlist-page-main">
        <h3>All Products</h3>
        <div className="product-container">
          {productsList.map((item) => (
            <Card
              key={item.id}
              cardData={item}
              buttonPrimary="Add to cart"
              buttonSecondary="Remove from wishlist"
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export { WishlistPage };
