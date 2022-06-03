import { v4 as uuid } from "uuid";
import cardImage from "../../assets/images/hero.jpg";
import pantTwo from "../../assets/images/pant-2.webp";
import pantThree from "../../assets/images/pant-3.jpeg";
import pantFour from "../../assets/images/pant-5.jpeg";
import shirt from "../../assets/images/TURQ.jpeg";
import whiteShirt from "../../assets/images/white-shirt.webp";
import goaShirt from "../../assets/images/goa.jpeg";
import shirtFour from "../../assets/images/shirtFour.jpeg";
import matTwo from "../../assets/images/mat-2.jpeg";
import matThree from "../../assets/images/mat-3.jpeg";
import matFour from "../../assets/images/mat-4.jpeg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    badgeName: "sale",
    image: pantTwo,
    cardName: "brown pant",
    brandName: "Isha Life",
    discountPrice: "249",
    originalPrice: "400",
    discountPercentage: "37%",
    categoryName: "pant",
    rating: 4.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: goaShirt,
    cardName: "vacation shirt",
    brandName: "Isha Life",
    discountPrice: "149",
    originalPrice: "200",
    discountPercentage: "25%",
    categoryName: "shirt",
    rating: 3.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: matFour,
    cardName: "nature mat",
    brandName: "Isha Life",
    discountPrice: "1",
    originalPrice: "10",
    discountPercentage: "90%",
    categoryName: "yogamat",
    rating: 1.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: pantThree,
    cardName: "formal pant",
    brandName: "Isha Life",
    discountPrice: "199",
    originalPrice: "300",
    discountPercentage: "34%",
    categoryName: "pant",
    rating: 3.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: whiteShirt,
    cardName: "white shirt",
    brandName: "Isha Life",
    discountPrice: "450",
    originalPrice: "540",
    discountPercentage: "17%",
    categoryName: "shirt",
    rating: 2.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: shirtFour,
    cardName: "pure shirt",
    brandName: "Isha Life",
    discountPrice: "50",
    originalPrice: "250",
    discountPercentage: "80%",
    categoryName: "shirt",
    rating: 1.2,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: matTwo,
    cardName: "sky mat",
    brandName: "Isha Life",
    discountPrice: "49",
    originalPrice: "80",
    discountPercentage: "39%",
    categoryName: "yogamat",
    rating: 3.75,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: "https://m.media-amazon.com/images/I/61bKHkUCNcL._UX569_.jpg",
    cardName: "Pant",
    brandName: "Isha Life",
    discountPrice: "99",
    originalPrice: "150",
    discountPercentage: "34%",
    categoryName: "pant",
    rating: 1.8,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: pantFour,
    cardName: "Pant",
    brandName: "Isha Life",
    discountPrice: "399",
    originalPrice: "550",
    discountPercentage: "28%",
    categoryName: "pant",
    rating: 2.8,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: shirt,
    cardName: "classic shirt",
    brandName: "Isha Life",
    discountPrice: "190",
    originalPrice: "250",
    discountPercentage: "24%",
    categoryName: "shirt",
    rating: 5,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: matThree,
    cardName: "chakra mat",
    brandName: "Isha Life",
    discountPrice: "400",
    originalPrice: "500",
    discountPercentage: "20%",
    categoryName: "yogamat",
    rating: 2.5,
  },
  {
    _id: uuid(),
    badgeName: "sale",
    image: cardImage,
    cardName: "collection mat",
    brandName: "Isha Life",
    discountPrice: "250",
    originalPrice: "500",
    discountPercentage: "50%",
    categoryName: "yogamat",
    rating: 4.5,
  },
];
