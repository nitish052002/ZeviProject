import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import axios from "axios";
import { MouseEvent } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  const [query, setQuery] = useState({
    brand: "",
    price: 0,
    rating: 0,
    underFive: 0,
  });

  const fetchProducts = async () => {
    try {
      let URL = await axios.get("https://dummyjson.com/products");
      let products = URL.data.products;
      setProducts(products);
      setfilterProducts(products);
    } catch (err) {
      setProducts([]);
    }
  };

  // query format

  interface Query {
    brand: string;
    price: number;
    rating: number;
  }

  const filterbyFilterBox = () => {
    const result = filterProducts.filter(({ brand, rating, price }) =>
      query.brand != ""
        ? brand == query.brand
        : query.rating != 0
        ? Math.floor(rating) >= query.rating
        : query.underFive != 0
        ? price < query.underFive
        : query.price != 0
        ? price > query.price || price < query.price
        : null
    );

    setProducts(result);
  };

  const onClickHandler = (name: any, value: any) => {
    setQuery({ ...query, [name]: value });
  };

  let result  = filterProducts.map(({ brand,id }): string => brand);
  let set =  new Set<string>(result); 
  let brands = [...set]

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterbyFilterBox();
  }, [query]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Product
              products={products}
              onClickHandler={onClickHandler}
              brands={brands}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
