import React from "react";
import { Button, TextField } from "@material-ui/core";
import searchData from "../Methods/searchData";

const Search = (data) => {
  const [searchVal, setSearchVal] = React.useState("");

  const searchInData = () => {
    console.log(searchVal);
    const searchedData = searchData(searchVal, data);
    console.log(searchedData);
  };
  return (
    // <div style={{display: 'flex', placeItems: "center"}}>
      <div>
      <TextField
        variant="outlined"
        label="Search"
        placeholder="Search"
        type="string"
        size="small"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />

      <Button variant="contained" onClick={() => searchInData()} color="primary">
        Search
      </Button>
    </div>
  );
};

export default Search;
