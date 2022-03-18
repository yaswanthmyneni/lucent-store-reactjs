import "./cart-page.css";
import {
  CardHorizontal,
  CartPrice,
  Footer,
  Navigation,
} from "../../components";
import { useCartContext, useWishlistContext } from "../../context";
import { addToWishlist } from "../../utility";

const CartPage = () => {
  // wishlist Context
  const { wishlists, setWishlists } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
    dispatch,
  } = useCartContext();

  // cart price section calculations
  const price = cartList.reduce(
    (acc, item) => acc + Number(item.originalPrice),
    0
  );
  const discountPrice = cartList.reduce(
    (acc, item) =>
      acc + (Number(item.originalPrice) - Number(item.discountPrice)),
    0
  );
  const totalPrice = price - discountPrice;

  return (
    <>
      <Navigation />
      <main>
        <h2 className="text-center">MY CART</h2>
        <div className="cart-page-wrapper">
          <section className="cart-product">
            {cartList.length > 0 &&
              cartList.map((item) => (
                <CardHorizontal
                  key={item._id}
                  cardData={item}
                  onClickFunc1={() => {
                    addToWishlist(wishlists, setWishlists, item);
                  }}
                  onClickFunc2={() => {
                    dispatch({
                      type: "cartList",
                      payload: cartList.filter((value) => value.id !== item.id),
                    });
                  }}
                />
              ))}
          </section>

          <section className="price">
            {cartList.length > 0 && (
              <CartPrice
                price={price}
                discountPrice={discountPrice}
                totalPrice={totalPrice}
              />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { CartPage };
