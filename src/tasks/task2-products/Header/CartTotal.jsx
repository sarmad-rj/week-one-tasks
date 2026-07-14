import React from "react";
import Typography from "@mui/material/Typography";

const CartTotal = ({ cart = [] }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (totalItems <= 0) return null;

  return (
    <Typography
      variant="body1"
      sx={{
        mr: 2,
        fontWeight: "bold",
        display: { xs: "none", sm: "block" },
      }}
    >
      Total: {totalPrice}
    </Typography>
  );
};

export default CartTotal;
