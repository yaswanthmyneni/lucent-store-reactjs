import "./card-vertical.css";
import { Button } from "../index";

const CardVertical = ({
  cardData,
  buttonPrimary,
  buttonSecondary,
  onClickFuncPrimary,
  onClickFuncSecondary,
}) => {
  const {
    badgeName,
    image,
    category,
    cardName,
    brandName,
    discountPrice,
    originalPrice,
    discountPercentage,
    rating,
  } = cardData;

  return (
    <div className="card card-vertical card-pos-rel">
      <span className="badge-text card-badge-pos flex-badge">{badgeName}</span>
      <img className="image-resp" src={image} alt="cart" />
      <div className="card-margin">
        <div className="card-flex">
        <p className="card-margin-bottom text-gray ">{category}</p>
        <p className="card-margin-bottom">{rating}
        <i className="fa-solid fa-star"></i></p>
        </div>
        <h3 className="card-margin-bottom">{cardName}</h3>
        <p className="card-margin-bottom">{brandName}</p>
        <div className="card-margin-bottom card-align-items">
          <h3 className="card-margin-0 card-display card-margin-lr">
            ${discountPrice}
          </h3>
          <h4 className="card-margin-0 card-display card-text-strick text-gray card-margin-lr">
            ${originalPrice}
          </h4>
          <h3 className="card-margin-0 card-display card-discount card-margin-lr">
            {discountPercentage}
          </h3>
        </div>
      </div>
      <Button
        name={buttonPrimary}
        className="btn-primary"
        onClickFunc={onClickFuncPrimary}
      ></Button>
      <Button
        name={buttonSecondary}
        className="btn-secondary"
        onClickFunc={onClickFuncSecondary}
      ></Button>
    </div>
  );
};

export { CardVertical };
