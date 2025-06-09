import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface SearchBarProps {
  query: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onInputChange,
  onSearch,
  onKeyDown,
}) => {
  return (
    <div className="center-container">
      <TextField
        label="Search Books"
        variant="outlined"
        value={query}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={onSearch}
        sx={{
          marginBottom: "10px",
          backgroundColor: "#1a73e8",
          color: "#fff",
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
