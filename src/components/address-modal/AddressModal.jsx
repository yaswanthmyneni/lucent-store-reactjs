import { useState } from "react";
import { useCheckoutContext } from "../../context";
import { v4 as uuid } from "uuid";
import "./address-modal.css";

const AddressModal = ({ setIsAddress }) => {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobileNumber: "",
  });
  const { name, street, city, state, country, pincode, mobileNumber } = address;

  // checkout context
  const { checkoutDispatch } = useCheckoutContext();

  const addAddress = (e, address, checkoutDispatch, setIsAddress) => {
    e.preventDefault();
    checkoutDispatch({
      type: "ADD_ADDRESS",
      payload: { _id: uuid(), ...address },
    });
    setIsAddress(false);
  };

  return (
    <>
      <div className="modal-bg"></div>
      <form className="address-form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Enter house no, street or colony"
          value={street}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, street: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, city: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, state: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, country: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Enter pincode"
          value={pincode}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, pincode: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) =>
            setAddress((prev) => ({
              ...prev,
              mobileNumber: e.target.value,
            }))
          }
        />
        <div className="address-flex">
          <button
            className="btn btn-primary"
            onClick={(e) =>
              addAddress(e, address, checkoutDispatch, setIsAddress)
            }
          >
            save
          </button>
          <button
            className="btn btn-secondary"
            onClick={(e) =>
              addAddress(
                e,
                {
                  name: "yash",
                  street: "19-41-s6, 1452, serinivasa puram, renigunta road",
                  city: "Tirupati",
                  state: "AP",
                  country: "India",
                  pincode: 517501,
                  mobileNumber: 8888899999,
                },
                checkoutDispatch,
                setIsAddress
              )
            }
          >
            dummy address
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setIsAddress(false)}
          >
            cancel
          </button>
        </div>
      </form>
    </>
  );
};

export { AddressModal };
