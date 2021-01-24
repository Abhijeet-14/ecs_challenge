import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";

import { Button, TextField, Typography } from "@material-ui/core";
import sortArray from "../Methods/sortArray";
import searchData from "../Methods/searchData";

function MyComponents() {
  const [state, dispatch] = useDataLayerValue();

  const [rev, setRev] = React.useState(false);
  const [startI, setStartI] = React.useState(0);
  const [searchVal, setSearchVal] = React.useState("");
  const [passData, setPassData] = React.useState([]);

  const { data, cart, buy } = state;

  React.useEffect(() => {
    setPassData(data);
  }, []);


  
  React.useEffect(() => {
    setPassData(data.slice(startI, startI + 10));
  }, [startI]);

  //   console.log(state, passData);
  //   var tempData = [];

  const addtoCart = (val) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { cart: val },
    });

  const buyThis = (val) =>
    dispatch({
      type: "BUY",
      payload: { buy: val },
    });

  const sortOnRating = () => {
    // console.log(tempData);
    setRev(!rev);
    const val = sortArray(passData, rev);
    setPassData(val);
    return -1;
  };

  const prev10 = () => {
    setStartI((startI) => startI - 10);
  };

  const next10 = () => {
    setStartI((startI) => startI + 10);
  };

  const searchInData = () => {
    console.log(searchVal);
    searchData(searchVal, data);
    // const searchedData = searchData(searchVal, data);
    // passData(searchedData);
  };

  return (
    <div className="container-fluid bg-danger p-2">
      <div className="float-right">
        <TextField
          variant="outlined"
          label="Search"
          placeholder="Search"
          type="string"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <Button variant="contained" onClick={() => searchInData()}>
          Search
        </Button>
        <Button variant="contained" onClick={() => prev10()}>
          Prev
        </Button>
        <Button variant="contained" onClick={() => next10()}>
          Next
        </Button>
        <Button variant="contained" onClick={() => sortOnRating()}>
          Sort
        </Button>
        <Button variant="contained">Cart {cart.length}</Button>
        <Button variant="contained">Buy {buy.length}</Button>
      </div>
      <table className="table table-bordered table-responsiv bg-success">
        <thead>
          <th scope="col">ID</th>
          <th scope="col">Title {"&"} Authors</th>
          <th scope="col">Average Rating {"&"} Count</th>
          <th scope="col">Languge {"&"} ISBN</th>
          <th scope="col">price</th>
          <th scope="col">Buy</th>
        </thead>
        <tbody>
          {passData?.map((val, index) => {
            // tempData = [...tempData, val];
            return (
              <tr>
                <th scope="row">
                  {index + 1}, ({val.bookID})
                </th>
                <td>
                  <div className="container" style={{ maxWidth: "200px" }}>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {val?.title}
                    </Typography>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {val?.authors}
                    </Typography>
                  </div>
                </td>

                <td>
                  <div className="container" style={{ width: "100px" }}>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {Math.round(val?.average_rating)}
                    </Typography>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {val?.ratings_count}
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="container" style={{ width: "100px" }}>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {val?.language_code?.toUpperCase()}
                    </Typography>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {val?.isbn}
                    </Typography>
                  </div>
                </td>
                <td>{val?.price}</td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    onClick={() => addtoCart(val)}
                  >
                    <Typography noWrap variant="subtitle1" component="p">
                      Add To Cart
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => buyThis(val)}
                  >
                    Buy
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponents;
