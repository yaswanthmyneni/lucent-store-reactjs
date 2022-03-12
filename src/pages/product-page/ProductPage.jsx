import "./product-page.css";
import { Navigation, Footer, Card } from "../../components";
import { cardDataList } from "../../data";

const ProductPage = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <aside id="aside" className="aside">
        <div className="aside-container">
          <div className="aside-flex">
            <h4>Filters</h4>
            <button className="btn btn-danger">clear</button>
          </div>
          <div className="filters">
            <ul className="ul-none aside-ul">
              <h5>Category</h5>
              <li>
                <label>
                  <input type="checkbox" /> Yoga Mats
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Shirts
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Pants
                </label>
              </li>
            </ul>
            <ul className="ul-none aside-ul">
              <h5>Sort By</h5>
              <li>
                <label for="low-to-high">
                  <input type="radio" id="low-to-high" name="price" /> Price -
                  Low to high
                </label>
              </li>
              <li>
                <label className="high-to-low">
                  <input type="radio" id="high-to-low" name="price" /> Price -
                  High to low
                </label>
              </li>
            </ul>
            <ul className="ul-none aside-ul">
              <h5>Rating</h5>
              <li>
                <label for="star-4">
                  <input type="radio" id="star-4" name="rating" /> 4 Star &
                  above
                </label>
              </li>
              <li>
                <label for="star-3">
                  <input type="radio" id="star-3" name="rating" /> 3 Star &
                  above
                </label>
              </li>
              <li>
                <label for="star-2">
                  <input type="radio" id="star-2" name="rating" /> 2 Star &
                  above
                </label>
              </li>
              <li>
                <label for="star-1">
                  <input type="radio" id="star-1" name="rating" /> 1 Star &
                  above
                </label>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <main className="main">
        <h3>All Products</h3>
        <div className="product-container">
          {cardDataList.map((item) => (
            <Card key={item.id} cardData={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { ProductPage };
