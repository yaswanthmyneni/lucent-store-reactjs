import "./cart-page.css";
import { CardHorizontal, CartPrice } from "../../components";
import { useCartContext, useWishlistContext } from "../../context";
import { addToWishlist, removeFromCart } from "../../utility";

const CartPage = () => {
  // wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // cart price section calculations
  const price = cartList.reduce(
    (acc, item) => acc + Number(item.qty) * Number(item.originalPrice),
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
      <main className="cart-main">
        <h2 className="text-center">MY CART</h2>
        <div className="cart-page-wrapper">
          <section className="cart-product">
            {cartList.length > 0 &&
              cartList.map((item) => (
                <CardHorizontal
                  key={item._id}
                  cardData={item}
                  onClickFunc1={() => {
                    addToWishlist(wishlist, setWishlist, item);
                  }}
                  onClickFunc2={() => {
                    removeFromCart(cartDispatch, item);
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
    </>
  );
};

export { CartPage };
