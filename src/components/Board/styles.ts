import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  border: 1px solid black;
  margin: 10px 15px;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid green;

  padding: 5px 15px;
`;
