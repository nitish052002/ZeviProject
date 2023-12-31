import React from "react";
import Header from "../components/Header";
import FilterBox from "../components/FilterBox";
import ProductCard from "../components/ProductCard";
import "./product.scss";

interface ProductItem {
  title: string;
  id: number;
  description?: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand?: string;
  stock?: number;
  category?: string;
  thumbnail: string;
  images?: string[];
}

interface Products {
  products: ProductItem[];
  onClickHandler: (name: any, value: any) => void;
  brands: string[];
}

function Product({ products, onClickHandler, brands }: Products) {
  return (
    <div className="products">
      <Header />
      <main className="parent-container">
        <h1 className="heading">Search Results</h1>
        <div className="box">
          <div className="filter-container">
            <FilterBox brandList={brands} onClickHandler={onClickHandler} />
          </div>
          <div className="products-container">
            {products.map((data) => (
              <ProductCard productData={data} key={data.id}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
