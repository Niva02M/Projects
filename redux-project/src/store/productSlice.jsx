import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";

const initialState = { data: [], status: statusCode.IDLE, error: null };
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = statusCode.ERROR;
        state.error = action.error.message;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json();
//     dispatch(fetchProducts(result));
//   };
// }
