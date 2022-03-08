import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 10px;

  border: 1px solid black;

  span {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  font-size: 1.5rem;
  font-weight: bold;

  outline: none;
  border: 0;
  background-color: white;
`;
