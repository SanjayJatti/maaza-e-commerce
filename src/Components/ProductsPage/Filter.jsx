import React from "react";
import "./Filter.css";

const filters = ["In Stock Only", "Fast Delivery Only"];

const Categories = ["Analog", "Digital", "Analog-Digital"];

const ratings = [
  "4 star & above",
  "3 star & above",
  "2 star & above",
  "1 star & above",
];

const brandnames = ["Casio", "Fastrack", "Fossil", "Titan"];

const sortBy = ["Price-Low to High", "Price-High to Low"];

export const Filter = () => {
  return (
    <div className="filter-wrapper flex-column">
      <div className="filter-header flex-row margin-b-sm">
        <h4>Filters</h4>
        <span>Clear</span>
      </div>
      <div>
        <div className="margin-b-sm">
          {filters.map((filter, index) => {
            return (
              <div className="flex-column gap-xs">
                <div className="input-checkbox">
                  <input type="checkbox" id={filter} name="inStock" />
                  <label htmlFor={filter}>{filter}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="margin-b-sm">
        <label htmlFor="price">Price Range : 0 to 10000</label>
        <input
          className="slider"
          type="range"
          min="0"
          max="10000"
          step="2000"
        />
      </div>
      <div className="margin-b-sm">
        <h4>Category</h4>
        {Categories.map((category, index) => {
          return (
            <div className="form-wrapper flex-column ">
              <div className="input-radio">
                <input type="radio" id={category} name="category" />
                <label htmlFor={category}>{category}</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="margin-b-sm">
        <h4>Rating</h4>
        {ratings.map((rating, index) => {
          return (
            <div className="flex-column gap-xs">
              <div className="input-checkbox">
                <input type="checkbox" id={rating} name="ratings" />
                <label htmlFor={rating}>{rating}</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="margin-b-sm">
        <h4>By Brand Name</h4>
        {brandnames.map((brand, index) => {
          return (
            <div className="flex-column gap-xs">
              <div className="input-checkbox">
                <input type="checkbox" id={brand} name="brandnames" />
                <label htmlFor={brand}>{brand}</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="margin-b-sm">
        <h4>Sort by</h4>
        {sortBy.map((sortByValue, index) => {
          return (
            <div className="flex-column gap-xs">
              <div className="input-radio">
                <input type="radio" id={sortByValue} name="sortBy" />
                <label htmlFor={sortByValue}>{sortByValue}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
