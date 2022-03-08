import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  margin: 10px 15px;

  button {
    padding: 5px 0;
    cursor: pointer;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;

  padding: 5px 15px;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid green;

  padding: 5px 15px;
`;
