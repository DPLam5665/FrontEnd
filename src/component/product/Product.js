import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/Context";
import ProductsSlice, { fetchProducts } from "../../redux/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const Product = ({ p }) => {
  // const { dispatch } = useContext(CartContext);
  const dispatch = useDispatch()
  //   useEffect(()=>{
  //     dispatch(fetchProducts())
  //   },[])
    const { product, price, status, error, id} = useSelector(state=>state.products) 
        useEffect(()=>{
            if(status === 'start'){
                dispatch(fetchProducts())
            }
        },[])
  return (
    
    <div className="col">
      <div class="card h-100">
        <img src={product.picture} class="card-img-top h-75" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{product.name}</h4>
          <h5 class="">${product.price}</h5>
          <button
            class="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            <CiShoppingCart/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;