import "./wishlist-page.css";
import { Navigation, Footer, CardVertical } from "../../components";
import { useCartContext, useProductContext, useWishlistContext } from "../../context";
import { addToCart } from "../../utility";

const WishlistPage = () => {
   // Wishlist Context
   const { wishlists, setWishlists } = useWishlistContext();

   // Cart Context
   const { cartState, dispatch } = useCartContext();
   const { cartList } = cartState;

  return (
    <>
      <Navigation />

      <main className="wishlist-page-main">
        <h3>All Products</h3>
        <div className="wishlist-container">
          {wishlists.map((item) => (
            <CardVertical
              key={item._id}
              cardData={item}
              buttonPrimary="Add to cart"
              buttonSecondary="Remove from wishlist"
              onClickFunc1={() => {
                addToCart(cartList, dispatch, item);
              }}
              onClickFunc2={() => {
                setWishlists((prevWishlist) =>
                  prevWishlist.filter((value) => value.id !== item.id)
                );
              }}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export { WishlistPage };
