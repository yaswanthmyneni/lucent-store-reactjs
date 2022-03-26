import "./wishlist-page.css";
import { CardVertical } from "../../components";
import { useCartContext, useWishlistContext } from "../../context";
import { addToCart, removeFromWishlist } from "../../utility";

const WishlistPage = () => {
  // Wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // Cart Context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  return (
    <>
      <main className="wishlist-page-main">
        <h3>All Products</h3>
        <div className="wishlist-container">
          {wishlist.length > 0 &&
            wishlist.map((item) => (
              <CardVertical
                key={item._id}
                cardData={item}
                buttonPrimary="Add to cart"
                buttonSecondary="Remove from wishlist"
                onClickFunc1={() => {
                  addToCart(cartList, cartDispatch, item);
                }}
                onClickFunc2={() => {
                  removeFromWishlist(setWishlist, item);
                }}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export { WishlistPage };
