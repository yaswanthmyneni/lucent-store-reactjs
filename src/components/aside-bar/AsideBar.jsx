import "./aside-bar.css";
import { Button } from "../index";
import { useProductContext } from "../../context";
import { useState } from "react";

const AsideBar = () => {
  const [key, setKey] = useState(0);

  // Product Context
  const {
    productPageState: {
      sortBy,
      categoryName: { yogamats, pants, shirts },
      range,
    },
    productPageDispatch,
  } = useProductContext();

  // Reset Function
  const resetFunction = () => {
    setKey((prev) => prev + 1);
    productPageDispatch({ type: "CLEAR" });
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
            <h5>Price Range</h5>
            <li>
              <label htmlFor="range" className="cursor">
                <input
                  type="range"
                  id="range"
                  className="cursor"
                  min="0"
                  max="500"
                  step="50"
                  value={range}
                  onChange={(event) => {
                    productPageDispatch({
                      type: "RANGE",
                      payload: event.target.value,
                    });
                  }}
                />
                {range}
              </label>
            </li>
          </ul>
          <ul className="ul-none aside-ul">
            <h5>Category</h5>
            <li>
              <label htmlFor="yogamats" className="cursor">
                <input
                  type="checkbox"
                  checked={yogamats}
                  id="yogamats"
                  className="cursor"
                  onChange={(event) =>
                    productPageDispatch({
                      type: "YOGA_MATS",
                      payload: event.target.checked,
                    })
                  }
                />
                Yoga Mats
              </label>
            </li>
            <li>
              <label htmlFor="shirts" className="cursor">
                <input
                  type="checkbox"
                  checked={shirts}
                  id="shirts"
                  className="cursor"
                  onChange={(event) =>
                    productPageDispatch({
                      type: "SHIRTS",
                      payload: event.target.checked,
                    })
                  }
                />
                Shirts
              </label>
            </li>
            <li>
              <label htmlFor="pants" className="cursor">
                <input
                  type="checkbox"
                  checked={pants}
                  id="pants"
                  className="cursor"
                  onChange={(event) =>
                    productPageDispatch({
                      type: "PANTS",
                      payload: event.target.checked,
                    })
                  }
                />
                Pants
              </label>
            </li>
          </ul>
          <ul className="ul-none aside-ul">
            <h5>Sort By</h5>
            <li>
              <label htmlFor="low-to-high" className="cursor">
                <input
                  type="radio"
                  id="low-to-high"
                  name="price"
                  className="cursor"
                  onChange={() =>
                    productPageDispatch({ type: "SORT_BY", payload: false })
                  }
                />
                Price - Low to high
              </label>
            </li>
            <li>
              <label htmlFor="high-to-low" className="cursor">
                <input
                  type="radio"
                  id="high-to-low"
                  name="price"
                  checked={sortBy}
                  className="cursor"
                  onChange={() =>
                    productPageDispatch({ type: "SORT_BY", payload: true })
                  }
                />
                Price - High to low
              </label>
            </li>
          </ul>
          <ul className="ul-none aside-ul">
            <h5>Rating</h5>
            <li>
              <label htmlFor="star-4" className="cursor">
                <input
                  type="radio"
                  id="star-4"
                  name="rating"
                  className="cursor"
                  onChange={() =>
                    productPageDispatch({ type: "RATING", payload: 4 })
                  }
                />
                4 Star & above
              </label>
            </li>
            <li>
              <label htmlFor="star-3" className="cursor">
                <input
                  type="radio"
                  id="star-3"
                  name="rating"
                  className="cursor"
                  onChange={() =>
                    productPageDispatch({ type: "RATING", payload: 3 })
                  }
                />
                3 Star & above
              </label>
            </li>
            <li>
              <label htmlFor="star-2" className="cursor">
                <input
                  type="radio"
                  id="star-2"
                  name="rating"
                  className="cursor"
                  onChange={() =>
                    productPageDispatch({ type: "RATING", payload: 2 })
                  }
                />
                2 Star & above
              </label>
            </li>
            <li>
              <label htmlFor="star-1" className="cursor">
                <input
                  type="radio"
                  id="star-1"
                  name="rating"
                  className="cursor"
                  onChange={() =>
                    productPageDispatch({ type: "RATING", payload: 1 })
                  }
                />
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
