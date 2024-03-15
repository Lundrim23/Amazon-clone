import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity || 1); // Handle default quantity
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity || 1), // Handle default quantity
        });
      }
      state.productsNumber += parseInt(action.payload.quantity || 1); // Update total products number
    },
    removeFromCart: (state, action) => {
      // Logic to remove a product from the cart
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
