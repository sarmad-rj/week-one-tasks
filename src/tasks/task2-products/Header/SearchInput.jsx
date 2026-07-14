import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./Style";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchInput;
