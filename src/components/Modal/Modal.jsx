import { useDispatch, useSelector } from 'react-redux';
import { selectCarForModal, selectIsShowModal } from 'redux/selectors';
import {
  StyledCloseBtn,
  StyledModal,
  StyledOverlay,
  ImageModalThumb,
  ModalImage,
  RentalButton,
} from './StyledModal';
import { AiOutlineClose } from 'react-icons/ai';
import { addCarForModal, toggleShowModal } from 'redux/CatalogSlice';
import { useEffect } from 'react';

export function Modal() {
  const dispatch = useDispatch();
  const car = useSelector(selectCarForModal);
  const isShowModal = useSelector(selectIsShowModal);

  useEffect(() => {
    if (isShowModal) document.body.classList.add('no-scroll');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        document.body.classList.remove('no-scroll');
        dispatch(toggleShowModal(''));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isShowModal]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove('no-scroll');
      dispatch(toggleShowModal());
      dispatch(addCarForModal('null'));
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove('no-scroll');
    dispatch(toggleShowModal());
    dispatch(addCarForModal('null'));
  };

  const {
    id,
    img,
    make,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    rentalPrice,
    mileage,
  } = car;
  const arrAccessories = [...accessories, ...functionalities];
  return (
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
          <AiOutlineClose size={24} fill="black" />
        </StyledCloseBtn>
        <ImageModalThumb>
          <ModalImage src={img} alt={model} width="461" loading="lazy" />
        </ImageModalThumb>
        <h3>
          {make} <span>{model}</span>,{year}
        </h3>
        <p>
          {address} | id: {id} | Year: {year} | Type: {type} | Fuel Consumption:
          {fuelConsumption} | Engine Size:{engineSize}
        </p>
        <p>{description}</p>
        <h4>Accessories and functionalities:</h4>
        <p>{arrAccessories.join(' | ')}</p>

        <h4>Rental Conditions:</h4>
        <div>
          {rentalConditions.split('\n').map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })}
          <p>Mileage:{mileage.toLocaleString('en-US')}</p>
          <p>Price: {rentalPrice}</p>
        </div>
        <RentalButton>
          <a href="tel:=+380730000000">Rental car</a>
        </RentalButton>
      </StyledModal>
    </StyledOverlay>
  );
}
