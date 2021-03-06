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
  if (rating >= 1)
    return sortByRatingList.filter((item) => item.rating >= rating);
};

const getSortByRange = (productList, range) => {
  const sortByRatingList = [...productList];
  return sortByRatingList.filter(
    (item) => Number(item.discountPrice) <= Number(range)
  );
};

const getSortBySearch = (productList, searchParam, categoryName) => {
  const sortByRatingList = [...productList];
  return sortByRatingList.filter(
    (item) =>
      item.categoryName
        .toString()
        .toLowerCase()
        .indexOf(searchParam.toLowerCase()) > -1
  );
};

const filterFunction =
  (...restFunctions) =>
  (productList, state) =>
    restFunctions.reduce(
      (prevProductList, filterFunction, index) =>
        filterFunction(prevProductList, state[index]),
      productList
    );

export {
  getSortByPrice,
  getSortByCategory,
  getSortByRating,
  filterFunction,
  getSortByRange,
  getSortBySearch,
};
