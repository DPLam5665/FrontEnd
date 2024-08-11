import {configureStore} from '@reduxjs/toolkit'

 import ProductsSlice from './ProductsSlice'

import CartSlice from './CartSlice'
import MaterialsSlice from './MaterialsSlice'


const store=configureStore({
    reducer:{
        materials:MaterialsSlice,
        products:ProductsSlice,
        // cart:CartSlice

    }   
})
export default store