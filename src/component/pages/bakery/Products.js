import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { fetchProducts } from '../../../redux/ProductsSlice'
import Product from '../../product/Product'


const Products = () => {
    const  {product, id, picture, price}= useSelector(state=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
    // const [products, setProducts] = useState(Data1)
  return (
    <div className="container mt-5">
    <div className='row row-cols-1 row-cols-md-4 row-cols-sm-2 row-cols-xs-1 g-4'>
        {
          product &&  product.map((product) => (
                <Product key={product.item}/>
            ))
        }
    </div>
    </div>
  )
}

export default Products