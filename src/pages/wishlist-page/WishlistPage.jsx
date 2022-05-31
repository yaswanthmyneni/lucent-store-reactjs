import "./wishlist-page.css";
import { CardVertical } from "../../components";
import {
  useCartContext,
  useToastContext,
  useWishlistContext,
} from "../../context";
import { addToCart, removeFromWishlist } from "../../utility";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  // Wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // from toast context
  const { toastDispatch } = useToastContext();

  // Cart Context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // from react-router-dom
  const navigate = useNavigate();

  return (
    <main className="wishlist-page-main">
      {wishlist.length === 0 ? (
        <div className="text-center mt-6rem">
          <h3>Wishlist is empty!</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Go to store
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-center">MY WISHLIST</h2>
          <div className="wishlist-container">
            {wishlist.length > 0 &&
              wishlist.map((item) => (
                <CardVertical
                  key={item._id}
                  cardData={item}
                  buttonPrimary="Add to cart"
                  buttonSecondary="Remove from wishlist"
                  onClickFunc1={() => {
                    addToCart(cartList, cartDispatch, item, toastDispatch);
                    removeFromWishlist(setWishlist, item, toastDispatch);
                  }}
                  onClickFunc2={() => {
                    removeFromWishlist(setWishlist, item, toastDispatch);
                  }}
                />
              ))}
          </div>
        </>
      )}
    </main>
  );
};

export { WishlistPage };
