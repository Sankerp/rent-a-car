import { createSlice } from '@reduxjs/toolkit';
import { allCarsThunk, firstPageCatalogThunk } from './CatalogThunk';

const initialState = {
  carsToDisplay: [],
  allCars: null,
  filter: null,
  isShowModal: false,
  carForModal: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,

  reducers: {
    toggleShowModal(state, action) {
      state.isShowModal = !state.isShowModal;
    },
    addCarForModal(state, { payload }) {
      state.carForModal = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(firstPageCatalogThunk.fulfilled, (state, { payload }) => {
        state.carsToDisplay = [...state.carsToDisplay, ...payload];
      })
      .addCase(allCarsThunk.fulfilled, (state, { payload }) => {
        state.allCars = payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { toggleShowModal, addCarForModal } = catalogSlice.actions;
