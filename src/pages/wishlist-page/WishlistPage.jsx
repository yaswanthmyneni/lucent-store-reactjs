import "./wishlist-page.css";
import { CardVertical } from "../../components";
import {
  useCartContext,
  useToastContext,
  useWishlistContext,
} from "../../context";
import { addToCart, removeFromWishlist } from "../../utility";

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

  return (
    <>
      <main className="wishlist-page-main">
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
                }}
                onClickFunc2={() => {
                  removeFromWishlist(setWishlist, item, toastDispatch);
                }}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export { WishlistPage };
