import "./card-vertical.css";
import { Button } from "../index";
import { useCartContext, useWishlistContext } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";

const CardVertical = ({
  cardData,
  buttonPrimary,
  buttonSecondary,
  onClickFunc1,
  onClickFunc2,
}) => {
  const {
    _id,
    badgeName,
    image,
    cardName,
    brandName,
    discountPrice,
    originalPrice,
    discountPercentage,
    rating,
  } = cardData;

  // Cart context
  const {
    cartState: { cartList },
  } = useCartContext();

  // Wishlist Context
  const { wishlist } = useWishlistContext();

  // from react-router-dom
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="card card-vertical card-pos-rel">
      <span className="badge-text card-badge-pos flex-badge">{badgeName}</span>
      <div className="card-img-container">
        <img className="image-resp" src={image} alt="cart" />
      </div>
      <div className="card-margin">
        <div className="card-flex">
          <p className="card-margin-0">{brandName}</p>
          <p className="card-margin-0">
            {rating}
            <i className="fa-solid fa-star"></i>
          </p>
        </div>
        <p className="card-margin-tb">{cardName}</p>
        <div className="card-align-items">
          <p className="card-margin-0 card-display ">$ {discountPrice}</p>
          <h6 className="card-margin-0 card-display card-text-strick text-gray card-margin-lr">
            ${originalPrice}
          </h6>
          <h6 className="card-margin-0 card-display card-discount">
            ( {discountPercentage} )
          </h6>
        </div>
      </div>
      <Button
        name={
          cartList.find((cardData) => cardData._id === _id)
            ? "Go to cart"
            : buttonPrimary
        }
        className="btn-primary"
        onClickFunc={
          cartList.find((cardData) => cardData._id === _id)
            ? () => navigate("/cart")
            : onClickFunc1
        }
      ></Button>
      <Button
        name={
          wishlist.find((cardData) => cardData._id === _id)
            ? pathname === "/products"
              ? "Go to wishlist"
              : buttonSecondary
            : buttonSecondary
        }
        className="btn-secondary"
        onClickFunc={
          wishlist.find((cardData) => cardData._id === _id)
            ? pathname === "/products"
              ? () => navigate("/wishlist")
              : onClickFunc2
            : onClickFunc2
        }
      ></Button>
    </div>
  );
};

export { CardVertical };
