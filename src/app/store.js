import { configureStore } from '@reduxjs/toolkit';
import mainshopReducer from "../features/mainShop/MainContainerSlices"


export const store = configureStore({
  reducer: {
    mainShop:mainshopReducer
  },
});
