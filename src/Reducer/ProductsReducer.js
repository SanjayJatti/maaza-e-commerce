import {GET_PRODUCTS, GET_DATA_ERROR} from "../Constants/ProductsConstants"
export const ProductsReducer = (state, action) => {
    switch (action.type){
        case GET_PRODUCTS:
        return {...state, products: action.payload}
        case GET_DATA_ERROR:
            return {...state, error : action.payload}
        default:
        return state
    }
}
