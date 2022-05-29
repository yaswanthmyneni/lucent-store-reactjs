import { useCheckoutContext } from "../../context";
import "./address-card.css";

const AddressCard = ({ address }) => {
  const { _id, name, street, city, state, country, pincode, mobileNumber } =
    address;

  const { checkoutDispatch } = useCheckoutContext();

  return (
    <label htmlFor={_id} className="address-box">
      <input
        type="radio"
        name="address"
        id={_id}
        onChange={() =>
          checkoutDispatch({ type: "SET_ADDRESS_ID", payload: _id })
        }
      />
      <div className="address-card-flex">
        <b className="text-xl">{name}</b>
        <p>
          {`House no. ${street}, ${city}, ${state}, ${country} - ${pincode}.`}
        </p>
        <p>Mobile: {mobileNumber}</p>
      </div>
    </label>
  );
};

export { AddressCard };
