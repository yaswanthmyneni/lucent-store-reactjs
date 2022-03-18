import "./card-horizontal.css";
import { Button } from "../index";

const CardHorizontal = ({ cardData, onClickFunc1, onClickFunc2 }) => {
  const {
    badgeName,
    image,
    cardName,
    brandName,
    discountPrice,
    originalPrice,
    discountPercentage,
  } = cardData;

  return (
    <div className="card card-horizontal product-card-container card-pos-rel card-box-shadow">
      <span className="badge-text card-badge-pos flex-badge">{badgeName}</span>
      <div className="img-container">
        <img className="image-resp" src={image} alt="cart-product" />
      </div>
      <div className="product-card-flex">
        <h4 className="margin-tb-4px"> {cardName}</h4>
        <p className="margin-tb-4px">{brandName}</p>
        <div className="card-align-items card-margin-bottom">
          <p className="card-margin-0 card-display">$ {discountPrice}</p>
          <h6 className="card-margin-0 card-display card-text-strick text-gray card-margin-lr">
            ${originalPrice}
          </h6>
          <h6 className="card-margin-0 card-display card-discount">
            ( {discountPercentage} )
          </h6>
        </div>
        <Button
          name="Move to wishlist"
          className="btn-primary product-m-top"
          onClickFunc={onClickFunc1}
        />
        <Button
          name="Remove from cart"
          className="btn-secondary product-m-top"
          onClickFunc={onClickFunc2}
        />
      </div>
    </div>
  );
};

export { CardHorizontal };
