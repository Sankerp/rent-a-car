import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c3b6af67cfdca3b6602877.mockapi.io/',
});

export const firstPageCatalogRequest = async PAGE => {
  const { data } = await instance.get('/adverts', {
    params: { page: PAGE, limit: 8 },
  });
  return data;
};

export const allCarsRequest = async () => {
  const { data } = await instance.get('/adverts');
  return data;
};
