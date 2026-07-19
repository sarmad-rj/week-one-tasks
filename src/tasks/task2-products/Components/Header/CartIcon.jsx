import React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const CartIcon = ({ cart = [], onCartClick }) => {
  const totalItems = cart.length;

  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
      onClick={onCartClick}
    >
      <Badge badgeContent={totalItems} color="error">
        <ShoppingCartSharpIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
