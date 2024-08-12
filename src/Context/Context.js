// import React, { createContext, useEffect, useReducer, useState } from 'react'
// // import CartSlice from '../redux/CartSlice'

// import axios from 'axios'
// export const AppContext = createContext()

// export const AppProvider = ({children}) => {
//     // const [cart, dispatch] = useReducer(CartSlice, [])
//     const [product, setProduct] = useState([])
//     useEffect(()=>{
//       fetchProducts();
//     },[])
//     const url='https://66a07c777053166bcabb9364.mockapi.io/Products'
//     const fectchProducts =()=>{
//       axios.get(url)
//       .then(function(response){
//         setProduct(response.data)
//       })
//       .catch(function(error){
//         console.log(error)
//       })
//     }
//   return (
//     <AppContext.Provider value={{cart, dispatch, fectchProducts, product, setProduct}}>
//         {children}
//     </AppContext.Provider>
//   )
// }

