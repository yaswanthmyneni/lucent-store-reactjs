import { Button } from "../index";

const CartPrice = ({ price, discountPrice, totalPrice }) => {
  return (
    <div className="price-container">
      <h4>PRICE DETAILS</h4>
      <div className="price-flex">
        <span>Price</span>
        <span>${price}</span>
      </div>
      <div className="price-flex">
        <span>Discount</span>
        <span>${discountPrice}</span>
      </div>
      <div className="price-flex">
        <span>Delivery charges</span>
        <span>$10</span>
      </div>
      <div className="price-flex">
        <h4>TOTAL PRICE</h4>
        <h4>${totalPrice}</h4>
      </div>
      <p>You will save <span className="text-xl color-green">$ {discountPrice}</span> in this order</p>
      <Button className="btn-primary" name="Place Order" />
    </div>
  );
};

export { CartPrice };
