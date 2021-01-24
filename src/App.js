import { makeStyles } from "@material-ui/core";
import React from "react";
import MyComponents from "./Components/MyComponents";
import { useDataLayerValue } from "./Reducer/DataLayer";
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import CartCom from "./Components/CartCom";
function App() {
  const classes = useStyles();
  const [state, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    fetch(
      "http://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "FETCH_DATA",
          payload: { data: data },
        })
      )
      .catch((err) => console.log("Fetching Error", err));
  }, []);

  return (
    <div className={classes.parent}>
      <div>
        <h1>ECS - BOOKS REPO</h1>
      </div>
      <Switch>
        <Route path="/Cart">
          <CartCom data={state.cart}/>
        </Route>
        <Route path="/">
          <MyComponents />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  parent: {
    display: "grid",
    placeItems: "center",
    gridTemplateRows: "minmax(80px, 25%) 1fr",
    // backgroundColor: "red",
  },
});
