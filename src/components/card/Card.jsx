import "./card.css";

const Card = ({ cardData }) => {
  const {
    badgeName,
    image,
    category,
    cardName,
    brandName,
    discountPrice,
    originalPrice,
    discountPercentage,
  } = cardData;

  return (
    <div className="card card-vertical card-pos-rel">
      <span className="badge-text card-badge-pos flex-badge">{badgeName}</span>
      <img className="image-resp" src={image} alt="cart" />
      <div className="card-margin">
        <p className="card-margin-bottom text-gray">{category}</p>
        <h3 className="card-margin-bottom">{cardName}</h3>
        <p className="card-margin-bottom">{brandName}</p>
        <div className="card-margin-bottom card-align-items">
          <h3 className="card-margin-0 card-display card-margin-lr">{discountPrice}</h3>
          <h4 className="card-margin-0 card-display card-text-strick text-gray card-margin-lr">
            {originalPrice}
          </h4>
          <h3 className="card-margin-0 card-display card-discount card-margin-lr">
            {discountPercentage}
          </h3>
        </div>
      </div>
      <button className="btn btn-primary">Add to cart</button>
      <button className="btn btn-secondary">
        <span>Add to wishlist</span>
      </button>
    </div>
  );
};

export { Card };