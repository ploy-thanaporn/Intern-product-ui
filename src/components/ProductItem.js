import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductItem() {
  return (
    <div className="product-item mt-10">
      <div className="product-item-img bg-white rounded-full w-20 h-20"></div>
      <div className="w-20">
        <p className="text-sm text-center font-medium mt-2">Product A</p>
        <p className="text-xs text-center text-indigo-400">40 THB</p>
        <div className="mt-2 text-sm text-center flex justify-around items-center">
          <button className="text-xs bg-white text-primary flex justify-center w-4 h-3.5 rounded-sm border-slate-400">
            <RemoveIcon
              className="btn-remove flex justify-center"
              fontSize="xs-small"
            ></RemoveIcon>
          </button>
          <p>1</p>
          <button className="bg-white text-primary flex justify-center w-4 h-3.5 rounded-sm border-slate-400">
            <AddOutlinedIcon
              className="btn-add flex justify-center"
              fontSize="xs-small"
            ></AddOutlinedIcon>
          </button>
        </div>
        <h5 className="text-xs text-center text-zinc-400">quantity</h5>
      </div>
    </div>
  );
}
