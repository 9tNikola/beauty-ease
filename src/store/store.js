import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';
import aboutReducer from './slices/aboutSlice';
import homeReducer from './slices/homeSlice';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    about: aboutReducer,
    home: homeReducer,
  },
});

export default store; 