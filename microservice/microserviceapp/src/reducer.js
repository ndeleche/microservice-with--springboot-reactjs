export const initialState ={
    basket: [],
};

export const getBasketTotal = (basket) =>{
    basket?.reduce((amount, item) => item.distance + amount, 0);
}

const reducer = ( state, action) =>{

    switch (action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket,action.item],
        };
    }
};

export default reducer;