export const addtoCart = (val, dispatch) =>
  dispatch({
    type: "ADD_TO_CART",
    payload: { cart: val },
  });

export const removeToCart = (val, dispatch) =>
  dispatch({
    type: "REMOVE_TO_CART",
    payload: { buy: val },
  });

export const buyThis = (val, dispatch) =>
  dispatch({
    type: "BUY",
    payload: { buy: val },
  });
