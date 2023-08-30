import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const movie = action.payload;
      if (!state.some((item) => item.id === movie.id)) {
        state.push(movie);
      }
    },
    removeFromCart: (state, action) => {
      const movieId = action.payload;
      return state.filter((item) => item.id !== movieId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
