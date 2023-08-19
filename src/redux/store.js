import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './RootSlice';
import { catalogReducer } from './CatalogSlice';

const store = configureStore({
  reducer: {
    root: rootReducer,
    catalog: catalogReducer,
  },
});

export default store;
