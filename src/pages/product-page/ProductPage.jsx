import "./product-page.css";
import { Navigation, Footer, CardVertical, AsideBar } from "../../components";
import { useProductContext } from "../../context";
import {
  getSortByCategory,
  getSortByPrice,
  getSortByRating,
  filterFunction,
} from "../../utility";

const ProductPage = () => {
  // Product Context
  const {
    state: { sortBy, categoryName, rating, productList, loading },
  } = useProductContext();

  // Filter Function
  const filteredProductList = filterFunction(
    getSortByPrice,
    getSortByCategory,
    getSortByRating
  )(productList, [sortBy, categoryName, rating]);

  return (
    <>
      <Navigation />
      <div className="product-page-wrapper">
        <AsideBar />
        <main className="product-page-main">
          <h3>All Products</h3>
          <h1 className="loading">{loading}</h1>
          <div className="product-container">
            {filteredProductList.map((item) => (
              <CardVertical
                key={item._id}
                cardData={item}
                buttonPrimary="Add to cart"
                buttonSecondary="Add to wishlist"
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { ProductPage };
