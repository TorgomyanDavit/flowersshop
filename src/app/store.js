import { configureStore } from '@reduxjs/toolkit';
import mainShopReducer from "../features/mainShop/MainContainerSlices"


export const store = configureStore({
  reducer: {
    mainShop:mainShopReducer
  },
});
