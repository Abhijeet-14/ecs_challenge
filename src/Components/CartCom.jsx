import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography } from "@material-ui/core";
import StarComp from "./StarComp";
import { useDataLayerValue } from "../Reducer/DataLayer";

function CartCom(data) {
  const [{ cart }, dispatch] = useDataLayerValue();

  return (
    <div>
      <Link to="/">
        <Button variant="contained" color="primary">
          BACK
        </Button>
      </Link>
      <table className="table table-bordered bg-success text-center">
        <thead>
          <th scope="col">ID</th>
          <th scope="col">Title {"&"} Authors</th>
          <th scope="col">Average Rating {"&"} Count</th>
          <th scope="col">Languge {"&"} ISBN</th>
          <th scope="col">price</th>
        </thead>
        <tbody>
          {cart?.map((val, index) => {
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
                      <StarComp val={Math.round(val?.average_rating)} />
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartCom;
