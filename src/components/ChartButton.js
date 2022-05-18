import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ChartButton() {
  return (
    <div className="text-center mt-8">
      <button className="bg-primary rounded-full w-9 h-9">
        <ShoppingCartOutlinedIcon
          className="-scale-x-100 items-center"
          fontSize="small"
          style={{ color: "white" }}
        />
      </button>
      <p className="mt-1 text-xs text-slate-600 font-medium">Checkout</p>
    </div>
  );
}
