import { createAsyncThunk } from '@reduxjs/toolkit';
import { allCarsRequest, firstPageCatalogRequest } from 'api/api';

export const firstPageCatalogThunk = createAsyncThunk(
  'catalog/firstPageCatalogThunk',
  async PAGE => firstPageCatalogRequest(PAGE)
);

export const allCarsThunk = createAsyncThunk('catalog/allCarsThunk', async () =>
  allCarsRequest()
);
