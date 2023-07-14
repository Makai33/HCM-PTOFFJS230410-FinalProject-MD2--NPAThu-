import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counter.slice";
import userLoginReducer from "./slices/userLogin.slice";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    userLoginStore: userLoginReducer,
    cart: cartReducer,
    product: productReducer,
    userStore: userSlice,
  },
});

export default store;
