import { createSlice } from '@reduxjs/toolkit';
import { allServices, serviceCategories } from '../../data/services/serviceData';

const initialState = {
  activeCategory: 'hair',
  services: allServices,
  categories: serviceCategories,
  selectedService: null,
  bookingDetails: null
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    clearBookingDetails: (state) => {
      state.bookingDetails = null;
    }
  }
});

export const { 
  setActiveCategory, 
  setSelectedService, 
  setBookingDetails, 
  clearBookingDetails 
} = servicesSlice.actions;

export default servicesSlice.reducer; 