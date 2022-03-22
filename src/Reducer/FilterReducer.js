export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_STOCK":
      return { ...state, inStock: !state.inStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, fastdelivery: !state.fastdelivery };
    case "SORT-BY":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((item) => item !== action.payload)
          : [...state.category, action.payload],
      };
    case "FILTER_BY_RATING":
      return { ...state, rating: action.payload };
    case "FILTER_BY_BRANDNAME":
      return {
        ...state,
        brandname: state.brandname.includes(action.payload)
          ? state.brandname.filter((item) => item !== action.payload)
          : [...state.brandname, action.payload],
      };
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "CLEAR_ALL":
      return {
        inStock: false,
        fastdelivery: false,
        priceRange: 10000,
        category: [],
        rating: "",
        brandname: [],
        sortBy: false,
        search: "",
      };
    default:
      return state;
  }
};
