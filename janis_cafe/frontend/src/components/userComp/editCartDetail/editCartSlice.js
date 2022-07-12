import { createSlice } from "@reduxjs/toolkit";

export const editCartSlice = createSlice({
  name: "editCart",
  initialState: {
    currentEdit: {
      frappe_price: 0,
      hot_price: 30,
      iced_price: 0,
      id_category: 1,
      id_product: 1,
      product_name: "espresso",
      product_photo: "espresso.jpg",
      quantity: 1,
    },
    //   {
    //     frappe_price: 0,
    //     hot_price: 0,
    //     iced_price: 65,
    //     id_category: 1,
    //     id_product: 3,
    //     product_name: "cappuccion",
    //     product_photo: "cappuccion.jpg",
    //     quantity: 1,
    //   },
  },
  reducers: {
    editDisplay: (state, action) => {
      state.currentEdit = action.payload;
    },
    editDone: (state, action) => {
      // state.
    },
    increaseEditOrder: (state, action) => {
      state.currentEdit[0].quantity += 1;
    },
    decreaseEditOrder: (state, action) => {
      state.currentEdit[0].quantity -= 1;
    },
  },
});

export const { editDisplay, editDone } = editCartSlice.actions;
export default editCartSlice.reducer;
