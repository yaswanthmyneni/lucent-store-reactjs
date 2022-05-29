import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../context";
import "./order-successful-page.css";

const OrderSuccessfulPage = () => {
  const {
    orderState: { orderDetails },
  } = useOrderContext();
  const navigate = useNavigate();

  return (
    <main className="text-center">
      <h1>Order successfully placed!</h1>
      <h3>Order Id: {orderDetails[orderDetails?.length - 1]?._id}</h3>
      <div className="order-successful-btn mt-8px">
        <button className="btn btn-primary" onClick={() => navigate("/orders")}>
          Go to order page
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </main>
  );
};

export { OrderSuccessfulPage };
