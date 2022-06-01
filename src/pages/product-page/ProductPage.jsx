import "./product-page.css";
import { CardVertical, AsideBar } from "../../components";
import {
  useCartContext,
  useProductContext,
  useToastContext,
  useWishlistContext,
} from "../../context";
import {
  getSortByCategory,
  getSortByPrice,
  getSortByRating,
  filterFunction,
  getSortByRange,
  getSortBySearch,
  addToCart,
  addToWishlist,
} from "../../utility";
import { useLocation, useNavigate } from "react-router-dom";

const ProductPage = () => {
  // from toast context
  const { toastDispatch } = useToastContext();

  // Product Context
  const {
    productPageState: {
      sortBy,
      categoryName,
      rating,
      productList,
      loading,
      range,
      searchParam,
    },
    productPageDispatch,
  } = useProductContext();

  // Wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // Cart Context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  // Filter Function
  const partiallyFilteredList = filterFunction(
    getSortByPrice,
    getSortByCategory,
    getSortByRating,
    getSortByRange
  )(productList, [sortBy, categoryName, rating, range]);

  const filteredProductList = getSortBySearch(
    partiallyFilteredList,
    searchParam,
    categoryName
  );

  return (
    <>
      <div className="search-bar-container">
        <i className="fas fa-search search-icon"></i>
        <input
          className="input search-bar"
          type="text"
          value={searchParam}
          onChange={(e) => {
            productPageDispatch({
              type: "SEARCH",
              payload: e.target.value,
            });
          }}
        />
      </div>
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
                  addToCart(
                    cartList,
                    cartDispatch,
                    item,
                    toastDispatch,
                    navigate,
                    location
                  );
                }}
                onClickFunc2={() => {
                  addToWishlist(
                    wishlist,
                    setWishlist,
                    item,
                    toastDispatch,
                    navigate,
                    location
                  );
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
