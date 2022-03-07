import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;

  span {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;

export const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;
