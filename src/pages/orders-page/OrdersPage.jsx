import { useOrderContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "./orders-page.css";

const OrdersPage = () => {
  // from order context
  const {
    orderState: { orderDetails },
  } = useOrderContext();

  // from react-router-dom
  const navigate = useNavigate();

  return (
    <main>
      {orderDetails.length === 0 ? (
        <div className="text-center mt-6rem">
          <h3>No orders found!</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Go to store
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-center">All orders</h2>
          <div className="orders-container">
            {orderDetails?.map((order) => (
              <div className="order-container">
                {order?.orderedItems?.map((product) => (
                  <div key={product._id} className="orders-product-card">
                    <div className="orders-image-container">
                      <img
                        className="image-resp"
                        src={product.image}
                        alt={product.cardName}
                      />
                    </div>
                    <div className="orders-flex">
                      <h4>{product.cardName}</h4>
                      <p className="m-0">$ {product.discountPrice}</p>
                    </div>
                  </div>
                ))}
                <p className="m-0 mt-auto">
                  <b className="text-xl">Order Id:</b> {order._id}
                </p>
                <p className="m-0">
                  <b className="text-xl">Payment Id:</b> {order.paymentId}
                </p>
                <p className="m-0">
                  <b className="text-xl">Paid:</b> $ {order.price}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export { OrdersPage };
