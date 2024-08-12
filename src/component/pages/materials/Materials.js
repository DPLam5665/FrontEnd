// import React, { useEffect, useState } from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import Material from '../../material/Material'
// import { fetchMaterials } from '../../../redux/MaterialsSlice'

// const Materials = () => {
//     const { material, id, picture, price} = useSelector((state)=>state.materials)
//     const dispatch = useDispatch()
//     useEffect(()=>{
//       dispatch(fetchMaterials())
//     },[])
//     // const [materials, setMaterials] = useState(Data2.materials)
//   return (
//     <div className="container mt-5">
//     <div className='row row-cols-1 row-cols-md-5 g-4'>
//         {
//           material &&  material.map(material => (
//                 <Material key={material}/>
//             ))
//         }
//     </div>
//     </div>
//   )
// }

// export default Materials