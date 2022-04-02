import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { makeServer } from "./server";
import { ProductsProvider } from "./Context/ProductsContext";
import { AuthProvider } from "./Context/AuthContext";
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
