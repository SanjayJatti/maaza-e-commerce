import React from "react";
import { Header } from "../Header/Header.jsx";
import { Filter } from "./Filter.jsx";
import { ProductCard } from "./ProductCard.jsx";
import { useFilters } from "../../Context/FilterContext.jsx";
import { useProducts } from "../../Context/ProductsContext.jsx";
import "./CSS/ProductsPage.css";
import {
  inStockFunction,
  fastdeliveryFunction,
  priceRangeFunction,
  categoryFunction,
  ratingFunction,
  brandFilter,
  sortByFilter,
  searchFilter,
  composeFunction
} from "../../Utils/FilteredProducts.js";

export const ProductsPage = () => {
  const { state } = useFilters();
  const { productsState } = useProducts();
  const { products } = productsState;

  const productsData = composeFunction(
    inStockFunction,
    fastdeliveryFunction,
    priceRangeFunction,
    categoryFunction,
    ratingFunction,
    brandFilter,
    sortByFilter,
    searchFilter
  )(state, products);

  return (
    <div>
      <Header />
      <Filter />
      <div className="main-wrapper flex-row flex-wrap">
        {productsData.length !== 0 ? (
          productsData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h2>No products to display</h2>
        )}
      </div>
    </div>
  );
};
