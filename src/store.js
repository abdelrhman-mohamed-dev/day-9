import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favorites/favoritesSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export default store;
