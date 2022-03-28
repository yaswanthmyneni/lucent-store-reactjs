import { v4 as uuid } from "uuid";
import cardImage from "../../assets/images/hero.jpg";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "shirt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQq0lD1n_lrZaei9kboSj2UrYaiVirMUbgMw&usqp=CAU",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "pant",
    image: "https://m.media-amazon.com/images/I/61bKHkUCNcL._UX569_.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "yogamat",
    image: cardImage,
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
