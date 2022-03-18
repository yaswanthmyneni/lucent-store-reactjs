const getSortByPrice = (productList, sortBy) => {
  const sortByPriceList = [...productList];
  sortBy
    ? sortByPriceList.sort(
        (a, b) => Number(b.discountPrice) - Number(a.discountPrice)
      )
    : sortByPriceList.sort(
        (a, b) => Number(a.discountPrice) - Number(b.discountPrice)
      );
  return sortByPriceList;
};

const getSortByCategory = (productList, categoryName) => {
  const sortByCategoryList = [...productList];
  const { yogamats, pants, shirts } = categoryName;

  if (yogamats && pants && shirts) return sortByCategoryList;
  if (yogamats && pants)
    return sortByCategoryList.filter((item) => item.categoryName !== "shirt");
  if (yogamats && shirts)
    return sortByCategoryList.filter((item) => item.categoryName !== "pant");
  if (pants && shirts)
    return sortByCategoryList.filter((item) => item.categoryName !== "yogamat");
  if (yogamats)
    return sortByCategoryList.filter((item) => item.categoryName === "yogamat");
  if (shirts)
    return sortByCategoryList.filter((item) => item.categoryName === "shirt");
  if (pants)
    return sortByCategoryList.filter((item) => item.categoryName === "pant");
  return sortByCategoryList;
};

const getSortByRating = (productList, rating) => {
  const sortByRatingList = [...productList];

  if (rating < 1) return sortByRatingList;
  if (rating >= 4)
    return sortByRatingList.filter((item) => item.rating >= rating);
  if (rating >= 3)
    return sortByRatingList.filter((item) => item.rating >= rating);
  if (rating >= 2)
    return sortByRatingList.filter((item) => item.rating >= rating);
  if (rating >= 1)
    return sortByRatingList.filter((item) => item.rating >= rating);
};

const filterFunction =
  (...restFunctions) =>
  (productList, state) =>
    restFunctions.reduce(
      (prevProductList, filterFunction, index) =>
        filterFunction(prevProductList, state[index]),
      productList
    );

export { getSortByPrice, getSortByCategory, getSortByRating, filterFunction };
