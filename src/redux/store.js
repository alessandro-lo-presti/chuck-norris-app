import { configureStore } from "@reduxjs/toolkit";
import { favouriteFactsReducer } from "./favouriteFactsSlice/favouriteFactsSlice";

export default configureStore({
  reducer: {
    favouriteFactsSlice: favouriteFactsReducer,
  },
});
