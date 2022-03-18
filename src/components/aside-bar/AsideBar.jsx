import "./aside-bar.css";
import { Button } from "../index";
import { useProductContext } from "../../context";
import { useState } from "react";

const AsideBar = () => {
  const [key, setKey] = useState(0);
  
  // Product Context
  const {
    state: { sortBy },
    dispatch,
  } = useProductContext();

  // Reset Function
  const resetFunction = () => {
    setKey((prev) => prev + 1);
    dispatch({type: 'CLEAR'});
  };

  return (
    <aside id="aside" className="aside" key={key}>
      <div className="aside-container">
        <div className="aside-flex">
          <h4>Filters</h4>
          <Button
            name="clear"
            className="btn-danger"
            onClickFunc={resetFunction}
          ></Button>
        </div>
        <div className="filters">
          <ul className="ul-none aside-ul">
            <h5>Category</h5>
            <li>
              <label htmlFor="yogamats">
                <input
                  type="checkbox"
                  id="yogamats"
                  onChange={(event) =>
                    dispatch({
                      type: "YOGA_MATS",
                      payload: event.target.checked,
                    })
                  }
                />{" "}
                Yoga Mats
              </label>
            </li>
            <li>
              <label htmlFor="shirts">
                <input
                  type="checkbox"
                  id="shirts"
                  onChange={(event) =>
                    dispatch({ type: "SHIRTS", payload: event.target.checked })
                  }
                />{" "}
                Shirts
              </label>
            </li>
            <li>
              <label htmlFor="pants">
                <input
                  type="checkbox"
                  id="pants"
                  onClick={(event) =>
                    dispatch({ type: "PANTS", payload: event.target.checked })
                  }
                />{" "}
                Pants
              </label>
            </li>
          </ul>
          <ul className="ul-none aside-ul">
            <h5>Sort By</h5>
            <li>
              <label htmlFor="low-to-high">
                <input
                  type="radio"
                  id="low-to-high"
                  name="price"
                  onChange={() => dispatch({ type: "SORT_BY", payload: false })}
                />{" "}
                Price - Low to high
              </label>
            </li>
            <li>
              <label htmlFor="high-to-low">
                <input
                  type="radio"
                  id="high-to-low"
                  name="price"
                  checked={sortBy}
                  onChange={() => dispatch({ type: "SORT_BY", payload: true })}
                />{" "}
                Price - High to low
              </label>
            </li>
          </ul>
          <ul className="ul-none aside-ul">
            <h5>Rating</h5>
            <li>
              <label htmlFor="star-4">
                <input
                  type="radio"
                  id="star-4"
                  name="rating"
                  onChange={() => dispatch({ type: "RATING", payload: 4 })}
                />{" "}
                4 Star & above
              </label>
            </li>
            <li>
              <label htmlFor="star-3">
                <input
                  type="radio"
                  id="star-3"
                  name="rating"
                  onChange={() => dispatch({ type: "RATING", payload: 3 })}
                />{" "}
                3 Star & above
              </label>
            </li>
            <li>
              <label htmlFor="star-2">
                <input
                  type="radio"
                  id="star-2"
                  name="rating"
                  onChange={() => dispatch({ type: "RATING", payload: 2 })}
                />{" "}
                2 Star & above
              </label>
            </li>
            <li>
              <label htmlFor="star-1">
                <input
                  type="radio"
                  id="star-1"
                  name="rating"
                  onChange={() => dispatch({ type: "RATING", payload: 1 })}
                />{" "}
                1 Star & above
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export { AsideBar };
