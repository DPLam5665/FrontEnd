import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import MaterialsSlice from "../../redux/MaterialsSlice";

const Material = ({ material }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="col">
      <div class="card h-100">
        <img src={MaterialsSlice.picture} class="card-img-top h-75" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{MaterialsSlice.name}</h4>
          <h5 class="">${MaterialsSlice.price}</h5>
          <button
            class="btn btn-primary"
            onClick={() => dispatch({ type: "Add", material: material })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Material;