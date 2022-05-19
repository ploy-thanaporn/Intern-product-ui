import React from "react";

export default function ProductCheckout() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="w-2 mt-2">
          <div className="product-item-img bg-white rounded-full w-10 h-10 border-solid border-4 border-primary"></div>
        </div>
        <div className="text-left mb-2 ml-16">
          <p className="text-sm font-medium mt-2">Product A</p>
          <p className="text-xs font-semibold text-primary">20 THB</p>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-sm text-right mt-2 font-medium text-primary">
          40 THB
        </p>
        <h5 className="text-xs text-right text-zinc-400">qty: 2</h5>
      </div>
    </div>
  );
}
