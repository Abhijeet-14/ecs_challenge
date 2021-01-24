export const initialState = {
    data: [],
    cart: [],
    buy: [],
}

const reducer =  (state, action) => {
    console.log(action);

    if(action.type === "FETCH_DATA"){
        return {
            ...state,
            data: action.payload.data,
        }
    }

    if(action.type === "ADD_TO_CART"){
        return {
            ...state,
            cart: [...state.cart, action.payload.cart],
        }
    }

    if(action.type === "REMOVE_TO_CART"){
        let newList = state.cart;
        let index = newList.indexOf(action.payload.cart);
        if (index !== -1) {
          newList.splice(index, 1);
        }
        return {
            ...state,
            cart: newList,
        }
    }

    if(action.type === "BUY"){
        return {
          ...state,
          buy: [...state.buy, action.payload.buy],
        };
    }

    return state;
}


export default reducer;