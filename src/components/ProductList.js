import React from "react";
import "../components/ProductList.css";
import ChartButton from "./ChartButton";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center">Products</h2>
      <div className="flex justify-center">
        <div className="container-item grid grid-cols-3 gap-x-2 place-items-center">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      <ChartButton />
    </div>
  );
}

export default ProductList;
