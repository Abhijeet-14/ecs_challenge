import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";

import { Button, TextField, Typography } from "@material-ui/core";
import sortArray from "../Methods/sortArray";
import searchData from "../Methods/searchData";
import { addtoCart, buyThis } from "../Methods/dispatchMethod";
import Search from "./Search";
import StarComp from "./StarComp";

function MyComponents() {
  const [state, dispatch] = useDataLayerValue();

  const [rev, setRev] = React.useState(false);
  const [startI, setStartI] = React.useState(0);

  const [passData, setPassData] = React.useState([]);

  const { data, cart, buy } = state;

  React.useEffect(() => {
    setPassData(data);
  }, []);

  React.useEffect(() => {
    setPassData(data.slice(startI, startI + 10));
  }, [startI]);

  const sortOnRating = () => {
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

  return (
    <div className="container-fluid p-2">
      <div className="container-fluid text-center">
        <Search data={passData} />
        <Button variant="contained" color="primary" onClick={() => prev10()}>
          Prev
        </Button>
        <Button variant="contained" color="primary" onClick={() => next10()}>
          Next
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sortOnRating()}
        >
          Sort
        </Button>
      </div>
      <div className="float-right">
        <Button variant="contained" color="primary">
          Cart {cart.length}
        </Button>
        <Button variant="contained" color="primary">
          Buy {buy.length}
        </Button>
      </div>
      <table className="table table-bordered bg-success text-center">
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
                  <div className="container" style={{ width: "" }}>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      <StarComp
                        val={Math.round(val?.average_rating)}
                      />
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
                  <div className="container" style={{ width: "150px" }}>
                    <Typography
                      noWrap
                      variant="subtitle1"
                      component="p"
                      color="black"
                    >
                      {val?.language_code?.toUpperCase() +
                        " (" +
                        val?.isbn +
                        ")"}
                    </Typography>
                  </div>
                </td>
                <td>{val?.price}</td>
                <td className="text-center">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    onClick={() => addtoCart(val, dispatch)}
                  >
                    <Typography noWrap variant="subtitle1" component="p">
                      Add To Cart
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => buyThis(val, dispatch)}
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
