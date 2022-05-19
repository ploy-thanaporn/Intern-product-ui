import React from "react";
import InputBox from "./InputBox";
import ProductCheckout from "./ProductCheckout";

export default function CheckoutPage() {
  return (
    <div className="container mt-20">
      <h2 className="text-2xl font-bold text-center">Checkout</h2>
      <div className="w-1/3 mx-auto">
        <div className="mt-4"></div>
        <ProductCheckout />
        <ProductCheckout />
        <div className="mt-6">
          <InputBox />
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-[#3C4257] py-2 px-6 rounded">
            <p className="text-[#697386]">Pay 55 Bath</p>
          </button>
        </div>
      </div>
    </div>
  );
}
