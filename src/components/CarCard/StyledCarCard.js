import styled from 'styled-components';

export const StyledCarCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 274px;
  justify-content: space-between;

  span {
    color: #3470ff;
  }
`;

export const StyledThumbImg = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  background-image: url(${props => props.$urlimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
