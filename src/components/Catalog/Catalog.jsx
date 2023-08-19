import CarCard from 'components/CarCard/CarCard';
import { Button } from '@mui/material';
import { StyledCatalog } from './StyledCatalog';
import { addCarForModal, toggleShowModal } from 'redux/CatalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars } from 'redux/selectors';

function Catalog({ cars, handleLoadMore, page }) {
  const allCars = useSelector(selectAllCars);

  const dispatch = useDispatch();

  const totalPages = Math.ceil(allCars?.length / 8);

  const handleLearnMore = e => {
    const carForModal = cars.find(car => car.id === Number(e.currentTarget.id));
    dispatch(addCarForModal(carForModal));
    dispatch(toggleShowModal());
  };

  return (
    <>
      <StyledCatalog>
        {cars.map(car => {
          return (
            <CarCard key={car.id} car={car} handleLearnMore={handleLearnMore} />
          );
        })}
      </StyledCatalog>
      {page !== totalPages && (
        <Button variant="contained" onClick={handleLoadMore}>
          LOAD MORE
        </Button>
      )}
    </>
  );
}

export default Catalog;
