import "./wishlist-page.css";
import { Navigation, Footer, CardVertical } from "../../components";
import { useProductContext } from "../../context";

const WishlistPage = () => {
  const { productsList } = useProductContext();

  return (
    <>
      <Navigation />

      <main className="wishlist-page-main">
        <h3>All Products</h3>
        <div className="product-container">
          {productsList.map((item) => (
            <CardVertical
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
