import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchInput from "./SearchInput";
import CartTotal from "./CartTotal";
import CartIcon from "./CartIcon";

const Header = ({ searchQuery, setSearchQuery, cart = [], onCartClick }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Shop
          </Typography>

          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <CartTotal cart={cart} />

          <Box sx={{ flexGrow: 1 }} />

          <CartIcon cart={cart} onCartClick={onCartClick} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
