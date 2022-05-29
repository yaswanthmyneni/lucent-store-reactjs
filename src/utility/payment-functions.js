import { v4 as uuid } from "uuid";

const proceedToPay = async (
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
) => {
  const response = await loadSdk();
  if (response) {
    const options = {
      key: "rzp_test_PxB9uE7mjhQMYJ",
      key_id: "rzp_test_PxB9uE7mjhQMYJ",
      key_secret: "Kubq0TFSEO2azl24gihsI0qn",
      amount: totalPrice * 100,
      currency: "USD",
      name: "CheckMate Store",
      description: "Thank you for shopping with us",
      image: hero,
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: user.firstName,
        email: user.email,
        contact: "9999999999",
      },
      notes: { address: "Razorpay Corporate Office" },
      theme: { color: "#202528" },
      handler: function (response) {
        orderDispatch({
          type: "SET_ORDER_DETAILS",
          payload: {
            _id: uuid(),
            orderedItems: cartList,
            paymentId: response.razorpay_payment_id,
            price: totalPrice,
            date: new Date(),
          },
        });
        deleteAllFromCart(cartDispatch, toastDispatch);
        checkoutDispatch({ type: "SET_ADDRESS_ID", payload: null });
        navigate("/order-successful");
        toastDispatch({
          type: "ADD_TOAST",
          payload: {
            id: uuid(),
            className: "toast-success",
            message: "order placed successfully",
          },
        });
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      console.error(response.error.code);
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-error",
          message: "Something went wrong, check console!",
        },
      });
    });
  } else {
    toastDispatch({
      type: "ADD_TOAST",
      payload: {
        id: uuid(),
        className: "toast-error",
        message: "Something went wrong, check console!",
      },
    });
  }
};

const loadSdk = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export { proceedToPay };
