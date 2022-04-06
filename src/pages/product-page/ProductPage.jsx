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

const ProductPage = () => {
  // getting encodedToken from localStorage
  const encodedToken = localStorage.getItem("token");
  
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
  } = useProductContext();

  // Wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // Cart Context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

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
                  encodedToken &&
                    addToCart(cartList, cartDispatch, item, toastDispatch);
                }}
                onClickFunc2={() => {
                  encodedToken &&
                    addToWishlist(wishlist, setWishlist, item, toastDispatch);
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
