import "./checkout-page.css";
import { AddressCard, AddressModal } from "../../components";
import {
  useAuthContext,
  useCartContext,
  useCheckoutContext,
  useOrderContext,
  useToastContext,
} from "../../context";
import { v4 as uuid } from "uuid";
import hero from "../../assets/images/hero.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAllFromCart, proceedToPay } from "../../utility";

const CheckoutPage = () => {
  const [isAddress, setIsAddress] = useState(false);

  // cart context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // auth context
  const {
    authState: { user },
  } = useAuthContext();

  // order context
  const { orderDispatch } = useOrderContext();

  // checkout context
  const {
    checkoutState: { addressList, addressId },
    checkoutDispatch,
  } = useCheckoutContext();

  // from toast context
  const { toastDispatch } = useToastContext();

  const navigate = useNavigate();

  // cart price section calculations
  const price = cartList.reduce(
    (acc, item) => acc + Number(item.qty) * Number(item.originalPrice),
    0
  );
  const discountPrice = cartList.reduce(
    (acc, item) =>
      acc +
      Number(item.qty) *
        (Number(item.originalPrice) - Number(item.discountPrice)),
    0
  );
  const totalPrice = price - discountPrice;

  const selectedAddress = addressList?.find(
    (address) => address._id === addressId
  );

  return (
    <>
      <main className="checkout-main">
        <h2 className="text-center">CHECKOUT</h2>
        <div className="checkout-page-wrapper">
          <section className="address-container">
            {addressList.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))}
            <button
              className="btn btn-primary checkout-btn"
              onClick={() => {
                setIsAddress(!isAddress);
              }}
            >
              Add new address
            </button>
          </section>
          <section className="price">
            <h3 className="mt-0">ORDER DETAILS</h3>
            <h4 className="text-center border-tb">Purchased Items</h4>
            <div className="order-flex">
              <p>Item</p>
              <p>Price</p>
            </div>
            {cartList.length > 0 &&
              cartList.map((product) => (
                <div key={product._id} className="order-flex">
                  <p>
                    {product.cardName} ({product.qty} x {product.discountPrice})
                  </p>
                  <p>{product.qty * product.originalPrice}</p>
                </div>
              ))}
            <h4 className="text-center border-tb">Billing</h4>
            <div className="order-flex">
              <p>MRP</p>
              <p>{price}</p>
            </div>
            <div className="order-flex">
              <p>Discount</p>
              <p>- {discountPrice}</p>
            </div>
            <div className="order-flex mb-8px">
              <p>Delivery</p>
              <p>FREE</p>
            </div>
            <div className="order-flex border-top">
              <b className="text-xl">Total Amount</b>
              <p>{totalPrice}</p>
            </div>
            <h4 className="text-center border-tb">Address</h4>
            {selectedAddress?._id !== undefined && (
              <div className="order-address-card mb-8px">
                <b className="text-xl">{selectedAddress.name}</b>
                <p>
                  {`House no. ${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country} - ${selectedAddress.pincode}.`}
                </p>
                <p>Mobile: {selectedAddress.mobileNumber}</p>
              </div>
            )}
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={() =>
                  cartList.length === 0
                    ? toastDispatch({
                        type: "ADD_TOAST",
                        payload: {
                          id: uuid(),
                          className: "toast-warning",
                          message: "Add Items to cart",
                        },
                      })
                    : !addressId
                    ? toastDispatch({
                        type: "ADD_TOAST",
                        payload: {
                          id: uuid(),
                          className: "toast-warning",
                          message: "Select address",
                        },
                      })
                    : proceedToPay(
                        totalPrice,
                        hero,
                        user,
                        cartDispatch,
                        navigate,
                        toastDispatch,
                        orderDispatch,
                        cartList,
                        checkoutDispatch,
                        deleteAllFromCart
                      )
                }
              >
                proceed to pay
              </button>
            </div>
          </section>
        </div>
      </main>
      {isAddress && <AddressModal setIsAddress={setIsAddress} />}
    </>
  );
};

export { CheckoutPage };
