import "./product-page.css";
import { Navigation, Footer, Card, AsideBar } from "../../components";
import { cardDataList } from "../../data";

const ProductPage = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <AsideBar />

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
