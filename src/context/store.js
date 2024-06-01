import { configureStore } from '@reduxjs/toolkit'

// Api
import { api } from './api/api'

// Slices
import wishlistSlice from './slice/wishlistSlice';
import cartSlice from './slice/cartSlice';


export const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        cart: cartSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});