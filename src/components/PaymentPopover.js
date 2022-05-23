import { Popover, Typography } from "@mui/material";
import React, { useState } from "react";

export default function PaymentPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsActive(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="mt-8 flex justify-center">
      <button className="bg-[#3C4257] py-2 px-6 rounded" onClick={handleClick}>
        <p
          style={{
            backgroundColor: isActive ? "paymnet-sucess" : "",
            color: isActive ? "white" : "#697386",
          }}
        >
          Pay 55 Bath
        </p>
      </button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 30, left: 690 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 0.5 }} className="bg-[#5bb543] text-white text-sm">
          <span className="material-icons">check_circle</span>
          Payment Success!
        </Typography>
      </Popover>
    </div>
  );
}
