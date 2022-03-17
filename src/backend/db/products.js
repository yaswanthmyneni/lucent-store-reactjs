import { v4 as uuid } from "uuid";
import cardImage from "../../assets/images/hero.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "Pants",
    brandName: "Isha Life",
    discountPrice: "249",
    originalPrice: "400",
    discountPercentage: "25%",
    categoryName: "pants",
    rating: 4.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "shirts",
    brandName: "Isha Life",
    discountPrice: "149",
    originalPrice: "200",
    discountPercentage: "25%",
    categoryName: "shirts",
    rating: 3.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "Yoga Mat",
    brandName: "Isha Life",
    discountPrice: "1",
    originalPrice: "10",
    discountPercentage: "25%",
    categoryName: "yogamats",
    rating: 1.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "pants",
    brandName: "Isha Life",
    discountPrice: "199",
    originalPrice: "300",
    discountPercentage: "25%",
    categoryName: "pants",
    rating: 0.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "shirts",
    brandName: "Isha Life",
    discountPrice: "19",
    originalPrice: "30",
    discountPercentage: "25%",
    categoryName: "shirts",
    rating: 2.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "Yoga Mat",
    brandName: "Isha Life",
    discountPrice: "49",
    originalPrice: "80",
    discountPercentage: "25%",
    categoryName: "yogamats",
    rating: 3.75,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "pants",
    brandName: "Isha Life",
    discountPrice: "99",
    originalPrice: "150",
    discountPercentage: "25%",
    categoryName: "pants",
    rating: 1.8,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "shirts",
    brandName: "Isha Life",
    discountPrice: "190",
    originalPrice: "250",
    discountPercentage: "25%",
    categoryName: "shirts",
    rating: 5,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    category: "Essential",
    cardName: "Yoga Mat",
    brandName: "Isha Life",
    discountPrice: "400",
    originalPrice: "500",
    discountPercentage: "25%",
    categoryName: "yogamats",
    rating: 2.5,
  },
];
