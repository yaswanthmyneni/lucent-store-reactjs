import "./cart-page.css";
import { CardHorizontal, CartPrice } from "../../components";
import {
  useCartContext,
  useToastContext,
  useWishlistContext,
} from "../../context";
import { addToWishlist, removeFromCart } from "../../utility";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  // wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // from toast context
  const { toastDispatch } = useToastContext();

  // from react-router-dom
  const navigate = useNavigate();

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
    <main className="cart-main">
      {cartList.length === 0 ? (
        <div className="text-center mt-6rem">
          <h3>Cart is empty!</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Go to store
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-center">MY CART</h2>
          <div className="cart-page-wrapper">
            <section className="cart-product">
              {cartList.length > 0 &&
                cartList.map((item) => (
                  <CardHorizontal
                    key={item._id}
                    cardData={item}
                    onClickFunc1={() => {
                      addToWishlist(wishlist, setWishlist, item, toastDispatch);
                      removeFromCart(cartDispatch, item, toastDispatch);
                    }}
                    onClickFunc2={() => {
                      removeFromCart(cartDispatch, item, toastDispatch);
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
                  onClickHandler={() => navigate("/checkout")}
                />
              )}
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export { CartPage };
