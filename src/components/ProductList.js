import React from "react";
import ChartButton from "./ChartButton";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center">Products</h2>
      <div className="flex justify-center">
        <div className="container-item grid grid-cols-3 gap-x-2 place-items-center w-96">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      <Link to="/checkout-page">
        <ChartButton />
      </Link>
    </div>
  );
}

export default ProductList;
