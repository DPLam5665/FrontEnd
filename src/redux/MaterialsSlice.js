// import axios from 'axios'
// import { createSlice, asyncThunkCreator, createAsyncThunk } from '@reduxjs/toolkit'
// const url = 'https://66a07c777053166bcabb9364.mockapi.io/MaterialsAndTools'



// const initialState={
        
//         id: null,
//         price: 0,
//         status:'start',
//         error: null,
//         picture: null
// }
// export const fetchMaterials = createAsyncThunk('materials/fectchMaterials', async ()=>{
//     const response = await axios.get(url)
//     return response.data
// })
// const MaterialsSlice=createSlice({
//     name: 'materials',
//     initialState,
//     reducers:{},
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchMaterials.pending, (state,action)=>{
//             state.status = 'loading'
        
//         })
//         .addCase(fetchMaterials.fulfilled, (state,action)=>{
//             state.status = 'succeeded'
//             state.product = action.payload
//         }).addCase(fetchMaterials.rejected, (state,action)=>{
//             state.status = 'failed'
//             state.error =action.error.message
//         })
//     }

// })

// export default MaterialsSlice.reducer