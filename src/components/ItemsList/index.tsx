import React from 'react';

import * as S from './styles';

interface ItemsListTypes {}

const ItemsList: React.FC<ItemsListTypes> = ({ children }) => (
  <S.ItemsList>{children}</S.ItemsList>
);

export default ItemsList;
