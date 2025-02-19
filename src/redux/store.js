
import {combineReducers} from'redux'
import { productReducer, selectedProductReducer } from './reducers/productReducer'
//import { selectedProduct } from './actions/productActions'
const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default rootReducer