import React from 'react';
import { BoardContext } from '../../context/BoardItems';

import TodoItemType from '../../Types/TodoItemType';

import * as S from './styles';

interface TodoItemTypes {
  item: TodoItemType;
}

const TodoItem: React.FC<TodoItemTypes> = ({ item }) => {
  const context = React.useContext(BoardContext);

  const handleMoveTask = () => {};

  return (
    <S.Container>
      <S.ArrowButton> {'<'} </S.ArrowButton>
      <span>{item.name}</span>
      <S.ArrowButton>{'>'}</S.ArrowButton>
    </S.Container>
  );
};

export default TodoItem;
