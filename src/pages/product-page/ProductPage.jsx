import "./product-page.css";
import { CardVertical, AsideBar } from "../../components";
import {
  useCartContext,
  useProductContext,
  useWishlistContext,
} from "../../context";
import {
  getSortByCategory,
  getSortByPrice,
  getSortByRating,
  filterFunction,
  addToCart,
  addToWishlist,
} from "../../utility";

const ProductPage = () => {
  // Product Context
  const {
    productPageState: { sortBy, categoryName, rating, productList, loading },
  } = useProductContext();

  // Wishlist Context
  const { wishlists, setWishlists } = useWishlistContext();

  // Cart Context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // Filter Function
  const filteredProductList = filterFunction(
    getSortByPrice,
    getSortByCategory,
    getSortByRating
  )(productList, [sortBy, categoryName, rating]);

  return (
    <>
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
                onClickFunc1={() => {
                  addToCart(cartList, cartDispatch, item);
                }}
                onClickFunc2={() => {
                  addToWishlist(wishlists, setWishlists, item);
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export { ProductPage };
